import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator(
  {
    Search : SearchScreen 
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Bussiness Search'
    }
  }
);

export default createAppContainer(navigator);
