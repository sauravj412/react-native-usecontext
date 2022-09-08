import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './Authstack';
import Appstack from './Appstack';
import {Authcontext} from '../Authcontext'; //default

function Appnav() {
  const {isLoading, userToken} = useContext(Authcontext);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={20} />;
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken == null ? <AuthStack /> : <Appstack />}
    </NavigationContainer>
  );
}

export default Appnav;
