/**
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
import getLunarDate from './getLunarDay'

const store = createStore(reducer)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

function parseDate(str) {
  var ymd = str.split('-');
  return new Date(parseInt(ymd[0]), parseInt(ymd[1]) - 1, parseInt(ymd[2]))
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.abs(Math.round((second-first)/(1000*60*60*24)));
}

export default class App extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      const lunarTodayObj = getLunarDate.methods.solar2lunar(new Date(Date.now()))
      const lunarToday = lunarTodayObj.day
      const storeState = store.getState()
      
      for (let i = 0; i < storeState.length; i++) {
        const lunarBdayFull = lunarToday.substring(0,4) + "-" + storeState[i].day
        const diffDays = datediff(parseDate(lunarBdayFull), parseDate(lunarToday))
        const name = storeState[i].name
        switch(diffDays) {
          case 7:
            PushNotification.localNotification({
              message: `It's ${name}'s bday in a week (in moonland)`
            })
            break
          case 1:
            PushNotification.localNotification({
              message: `It's ${name}'s bday tomorrow!`
            })
            break
          case 0:
            PushNotification.localNotification({
              message: `It's ${name}'s bday today! (in moonland)`
            })
          default:
            // code block
        }
      }
    }
  }

    render = () => (
      <Provider store={store}>
        <AppContainer />
        <PushController/>
      </Provider>
      )
}