import React from 'react'
import PushNotification from 'react-native-push-notifications'
import {PushNotificationIOS} from 'react-native'

export default class PushController extends React.Component {
    componentDidMount() {
        PushNotification.configure({
            onNotification: function(notification) {
                console.log( 'NOTIFICATION from PushController:', notification );
                // notification.finish(PushNotificationIOS.FetchResult.NoData)
            }
        })
    }

    render() {
        return null
    }
}