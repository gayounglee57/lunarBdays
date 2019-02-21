//@flow

import React from 'react'
import {Button, Text, View} from 'react-native'
import {addBday} from './reducer'
import {connect} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
 
class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
        headerRight: (
            <Button
            onPress={() => navigation.navigate('MyModal')}
            title="Add"
            color="black"
            />
        ),
        }
    }

    renderItems = () => {
        return this.props.bdays.map(bday => <Text key={bday.id}> {bday.day} </Text>)
    }

    render() {
        console.log(this.props)
        return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>{this.renderItems()}</Text>
        </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        bdays: state
    }
}

export default connect(mapStateToProps)(HomeScreen)