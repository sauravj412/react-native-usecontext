import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Appstack from '../Znavigator/Appstack';
import AuthStack from './AuthStack';

import {Authcontext} from '../Authcontext'; //default

function Appnav() {
  const {isLoading, userToken} = useContext(Authcontext);

  if (isLoading) {
    return <ActivityIndicator size={20} />;
  }

  return (
    <NavigationContainer>
      {userToken == null ? <AuthStack /> : <Appstack />}
    </NavigationContainer>
  );
}

export default Appnav;
