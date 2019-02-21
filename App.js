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

const store = createStore(reducer)
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addBday('11-01'))
store.dispatch(addBday('12-02'))
store.dispatch(addBday('12-02'))
store.dispatch(addBday('1-15'))
store.dispatch(deleteBday('11-01'))
  
export default class App extends React.Component {
    render = () => (
      <Provider store={store}>
        <AppContainer />
      </Provider>
      )
}