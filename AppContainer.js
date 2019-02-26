// @flow
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import ModalScreen from './ModalScreen';
  
const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      MyModal: ModalScreen
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'rgb(150,150,150)',
        },
        headerTintColor: '#fff',
      },
      initialRouteName: 'Home',
    }
);
  
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer