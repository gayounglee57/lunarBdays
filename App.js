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

// Dispatch some actions
store.dispatch(addBday('Mine', '11-1'))
store.dispatch(addBday('Hi', '12-2'))
store.dispatch(deleteBday('Hi', '12-2'))
store.dispatch(addBday('In a day', '1-25'))
store.dispatch(deleteBday('Mine', '11-1'))
store.dispatch(addBday('Today', '1-24'))
store.dispatch(addBday('In a week', '1-31'))

function parseDate(str) {
  var ymd = str.split('-');
  return new Date(parseInt(ymd[0]), parseInt(ymd[1]) - 1, parseInt(ymd[2]))
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.abs(Math.round((second-first)/(1000*60*60*24)));
}

console.log(datediff(parseDate('2019-1-26'), parseDate('2019-1-25')))

export default class App extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    // only working when debug remotely??? if there are if statements around the push notification it seems...
    // nope, something to do with Date and different JS execution contexts for device vs browser!
    if (appState === 'background') {
      const lunarTodayObj = getLunarDate.methods.solar2lunar(new Date(Date.now()))
      const lunarToday = lunarTodayObj.day
      const storeState = store.getState()
      
      for (let i = 0; i < storeState.length; i++) {
        const lunarBdayFull = lunarToday.substring(0,4) + "-" + storeState[i].day
        const diffDays = datediff(parseDate(lunarBdayFull), parseDate(lunarToday))
        switch(diffDays) {
          case 7:
            PushNotification.localNotification({
              message: "It's someone's bday in a week (in moonland)"
            })
            break
          case 1:
            PushNotification.localNotification({
              message: "It's someone's bday tomorrow!"
            })
            break
          case 0:
            PushNotification.localNotification({
              message: "It's someone's bday today! (in moonland)"
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