// @flow

import React, { Component } from 'react'
import {
	StyleSheet, View, Text, TouchableOpacity, Button, TextInput
} from 'react-native'
import {NavigationScreenProp} from 'react-navigation'
import { connect } from 'react-redux'
import {addBday} from './action'
import styles from './ModalScreenStyles'

type State = {
  day: string,
  name: string
}

type Props = {
    navigation: NavigationScreenProp<>,
    onSaveClick: function
}

class ModalScreen extends Component<Props, State> {
  constructor(props: Props){
      super(props)
      this.state = {
        day: '',
        name: '',
      };
    }
    
    handleSubmit = () => {
        if(this.state.day.trim() === '') {
          alert('Oops you tried to enter an empty bday')
          return
        }
        this.props.onSaveClick(this.state.name, this.state.day)
        this.props.navigation.goBack()
    }

  render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Name" autoCorrect={false} 
                onChangeText={(text) => {
                    this.setState({name: text})
                    console.log(this.state.name)
                }}
            />
            <TextInput style={styles.textInput} placeholder="MM-DD" autoCorrect={false} 
                onChangeText={(text) => {
                    this.setState({day: text})
                }}
            />
            <TouchableOpacity
                onPress={this.handleSubmit}
                style={styles.button}
            >
              <Text style={styles.textLabel}>Save</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        bdays: state
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      onSaveClick: (name, day) => {
        dispatch(addBday(name, day))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen) 