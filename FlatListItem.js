import React from 'react'
import {
	StyleSheet, View, Text, TouchableOpacity, Alert
} from 'react-native'
import Swipeout from 'react-native-swipeout'

let FlatListItem = props => {
  const {day, name, id, onDeleteClick, navigation} = props

  showEditModal = () => {
    navigation.navigate('MyModal', {id, day, name})
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
            onDeleteClick(id)
          }
        },
      ],

    );
  };

  // TODO: tidy styling
  return (
    <Swipeout right={[
      {
        text: 'Delete',
        backgroundColor: 'rgb(127, 32, 23)',
        onPress: showDeleteConfirmation
      },
    ]} autoClose={true}>
      <TouchableOpacity onPress={showEditModal}>
        <View style={{backgroundColor: 'white', borderBottomWidth: 0.5, borderColor: 'rgb(200,200,200)', flex: 1, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'Arial', fontSize: 21, paddingVertical: 20, paddingLeft: 20, color: 'rgb(120,120,120)', fontWeight: 'bold'}}>{name}</Text>
          <Text style={{fontFamily: 'Arial', fontSize: 21, paddingVertical: 20, paddingLeft: 10, color: 'rgb(120,120,120)'}}>{day}</Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
}

export default FlatListItem