import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screen/SearchScreen';
import BusinessScreen from './src/screen/BusinessScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Business: BusinessScreen
  }, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);