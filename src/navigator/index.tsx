import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Details from '../pages/Details';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
let Stack = createNativeStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerTitle: '首页'}}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
