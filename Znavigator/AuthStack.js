import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Signup from '../AuthScreen/Signup';
import Microsoft from '../AuthScreen/Microsoftlogin';
import Facebooklogin from '../AuthScreen/Facebooklogin';
import Googlelogin from '../AuthScreen/Googlelogin';
const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Google') {
            iconName = focused ? 'logo-google' : 'logo-google';
          } else if (route.name === 'Microsoft') {
            iconName = focused ? 'logo-firefox' : 'logo-firefox';
          } else if (route.name === 'Facebook') {
            iconName = focused ? 'logo-facebook' : 'logo-facebook';
          } else if (route.name === 'Signup') {
            iconName = focused ? 'log-in-sharp' : 'log-in-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="Google" component={Googlelogin} />
      <Tab.Screen name="Microsoft" component={Microsoft} />
      <Tab.Screen name="Facebook" component={Facebooklogin} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
}
