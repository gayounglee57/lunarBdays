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
	day: string;
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
      };
    }
    
    handleSubmit = () => {
        if(this.state.day.trim() === '') {
          alert('Oops you tried to enter an empty bday')
          return
        }
        this.props.onSaveClick(this.state.day)
        this.props.navigation.goBack()
    }

  render() {
    return (
        <View style={styles.container}>
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
      onSaveClick: day => {
        dispatch(addBday(day))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen) 