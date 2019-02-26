//@flow

import React from 'react'
import {Button, Text, View, Alert, FlatList} from 'react-native'
import {connect} from 'react-redux'
import FlatListItem from './FlatListItem'
import { deleteBday } from './action'
import styles from './HomeScreenStyles'
import PushNotification from 'react-native-push-notifications'
import PushController from './PushController'
 
class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
        headerRight: (
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Add"
                color="white"
            />
        ),
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={this.props.bdays}
                renderItem={({item}) => <FlatListItem day={item.day} onDeleteClick={this.props.onDeleteClick}/>}
                keyExtractor={item => item.id}
            />
        </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        bdays: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onDeleteClick: day => {
        dispatch(deleteBday(day))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)