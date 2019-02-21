// @flow

import React, { Component } from 'react';
import {
	StyleSheet, View, Text, TouchableOpacity, Button, TextInput
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation'
import { connect } from 'react-redux';
import {addBday} from './action'

type State = {
	name: string;
}

type Props = {
    navigation: NavigationScreenProp<>,
    onSaveClick: function
}

class ModalScreen extends Component<Props, State> {
  constructor(props: Props){
		super(props);
		this.state = {
			name: '',
		};
    }
    
    handleSubmit = () => {
        if(this.state.name.trim() === '') {
          return;
        }
        this.props.onSaveClick(this.state.name)
        this.props.navigation.goBack()
    }

  render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="DD-MM" autoCorrect={false} 
                onChangeText={(text) => {
                    this.setState({name: text})
                    console.log(this.state.name)
                }}
            />
            <Button
                onPress={this.handleSubmit}
                title="Save"
                accessibilityLabel="Click to save"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput:{
		height: 40,
		borderColor: 'white',
		borderWidth: 0,
		fontFamily: 'GillSans',
		fontSize: 30,
	},
	button:{
		backgroundColor: 'rgb(100,100,100)',
		padding: 10,
		marginTop: 15,
		marginLeft: 15,
		width: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textLabel:{
		color: 'white',
		fontSize: 21,
		fontFamily: 'GillSans',
	},
	flatList: {
        flex: 1,
        flexDirection: 'column',
    },
});

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