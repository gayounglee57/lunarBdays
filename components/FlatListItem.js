import React from 'react'
import {
	View, Text, TouchableOpacity, Alert
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import styles from './FlatListItemStyles'

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

  return (
    <Swipeout right={[
      {
        text: 'Delete',
        backgroundColor: 'rgb(127, 32, 23)',
        onPress: showDeleteConfirmation
      },
    ]} autoClose={true}>
      <TouchableOpacity onPress={showEditModal}>
        <View style={styles.container}>
          <Text style={[styles.flatList, styles.flatListName]}>{name}</Text>
          <Text style={[styles.flatList, styles.flatListDay]}>{day}</Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
}

export default FlatListItem