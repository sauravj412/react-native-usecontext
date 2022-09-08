import React from 'react';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import {createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator();

function Authstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Signup} />
      <Stack.Screen name="Signup" component={Login} />
    </Stack.Navigator>
  );
  //stack navigator
}

export default Authstack;
