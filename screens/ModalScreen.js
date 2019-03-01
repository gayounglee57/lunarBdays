// @flow

import React, { Component } from 'react'
import {
	View, Text, TouchableOpacity, TextInput
} from 'react-native'
import {NavigationScreenProp} from 'react-navigation'
import { connect } from 'react-redux'
import {addBday} from '../services/action'
import styles from './ModalScreenStyles'

type State = {
  day: string,
  name: string,
  id: number
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
        id: 0,
      };
    }
    
    handleSubmit = () => {
        if(this.state.day.trim() === '' || this.state.name.trim() === '') {
          alert('Oops you tried to enter an empty bday')
          return
        }
        this.props.onSaveClick(this.state.name, this.state.day, this.state.id)
        this.props.navigation.goBack()
    }

  render() {
    const id = this.props.navigation.getParam('id', 0)
    const day = this.props.navigation.getParam('day', 'NO-DAY')
    const name = this.props.navigation.getParam('name', 'NO-NAME')

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder={id === 0 ? 'Whose birthday?' : name} autoCorrect={false} 
                onChangeText={(text) => {
                    this.setState({name: text})
                    this.setState({id})
                }}
            />
            <TextInput style={styles.textInput} placeholder={id === 0 ? 'MM-DD' : day} autoCorrect={false} 
                onChangeText={(text) => {
                    this.setState({day: text})
                    this.setState({id})
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
      onSaveClick: (name, day, id) => {
        dispatch(addBday(name, day, id))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen) 