import { createStackNavigator } from 'react-navigation-stack';
import about from '../routes/about.js';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: about,
    navigationOptions: {
      title: 'GameZone',
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;