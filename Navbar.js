import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Native-Project2/AppScreen/Home';
import Fetch from '../Native-Project2/AppScreen/Api';
import Newpage from '../Native-Project2/AppScreen/Newpage';
import User from '../Native-Project2/AppScreen/User';
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
