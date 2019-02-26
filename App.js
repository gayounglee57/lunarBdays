/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import { addBday, deleteBday } from './action'
import AppContainer from './AppContainer'
import PushController from './PushController'
import {AppState, Platform} from 'react-native'
import PushNotification from 'react-native-push-notifications'

const store = createStore(reducer)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addBday('11-01'))
store.dispatch(addBday('12-02'))
store.dispatch(deleteBday('12-02'))
store.dispatch(addBday('01-15'))
store.dispatch(deleteBday('11-01'))
store.dispatch(addBday('02-26'))
  
export default class App extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    let todayISO = new Date(Date.now()).toISOString()
    let todaySplit = todayISO.split('T')[0].substring(5)
    const todayBday = store.getState().filter(item => item.day === todaySplit)
    if (todayBday.length) {
      // works but sometimes shows notification when you go into app, not outside it
      PushNotification.localNotification({
        message: "It's someone's bday in moonland!"
      })
    }
  }

    render = () => (
      <Provider store={store}>
        <AppContainer />
        <PushController/>
      </Provider>
      )
}