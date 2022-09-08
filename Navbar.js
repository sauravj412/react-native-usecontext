import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Fetch from './screens/Api';
import Newpage from './screens/Newpage';
import User from './screens/User';
const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === 'Fetch') {
            iconName = focused ? 'md-document-sharp' : 'md-document-outline';
          } else if (route.name === 'Newtab') {
            iconName = focused ? 'add-sharp' : 'add-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'server-sharp' : 'server-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Fetch" component={Fetch} />
      <Tab.Screen name="Newtab" component={Newpage} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
