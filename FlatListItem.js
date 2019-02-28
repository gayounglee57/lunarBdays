import React from 'react'
import {
	StyleSheet, View, Text, TouchableOpacity, Alert
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import { deleteBday } from './action'

let FlatListItem = props => {
  const {day, onDeleteClick} = props

  showEditModal = () => {
    popupDialogComponent.showDialogComponentForUpdate({
      id, name
    });
  }

  showDeleteConfirmation = () => {
    Alert.alert(
      'Delete the lunar birthday?',
      'Just double checking!',
      [
        {
          text: 'No', 
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes', onPress: () => {
            onDeleteClick(day)
          }
        },
      ],

    );
  };

  return (
    <Swipeout right={[
      {
        text: 'Delete',
        backgroundColor: 'rgb(127, 32, 23)',
        onPress: showDeleteConfirmation
      },
    ]} autoClose={true}>
      <TouchableOpacity>
        <View style={{backgroundColor: 'white', borderBottomWidth: 0.5, borderColor: 'rgb(200,200,200)', flex: 1}}>
          <Text style={{fontFamily: 'Arial', fontSize: 21, padding: 20, color: 'rgb(120,120,120)'}}>{day}</Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
}

export default FlatListItem