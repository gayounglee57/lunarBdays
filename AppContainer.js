// @flow
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import ModalScreen from './ModalScreen';
import { connect } from 'react-redux';
import { addBday } from './action';
  
const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      MyModal: ModalScreen
    },
    {
      initialRouteName: 'Home'
    }
);
  
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer

// const mapStateToProps = state => {
//     return {
//       bdays: state[0]
//     }
//   }
  
// const mapDispatchToProps = dispatch => {
//     return {
//       onTodoClick: day => {
//         dispatch(addBday(day))
//       }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)