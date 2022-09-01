import React, {useContext} from 'react';
import {View, ActivityIndicator, ActivityIndicatorBase} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './Authstack';
import Appstack from './Appstack';
import {Authcontext} from '../Authcontext';

function Appnav() {
  const {isLoading, userToken} = useContext(Authcontext);

  if (isLoading) {
    <ActivityIndicator size={20} />;
  }

  return (
    <NavigationContainer>
      {userToken == null ? <AuthStack /> : <Appstack />}
    </NavigationContainer>
  );
}

export default Appnav;
