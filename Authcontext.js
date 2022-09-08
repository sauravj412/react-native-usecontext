import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
//named same name
export const Authcontext = createContext(); //named

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoding] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken('sauravj');
    AsyncStorage.setItem('userToken', 'sauravj');
  };
  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem(userToken);
  };
  const isLoggedin = async () => {
    try {
      setIsLoding(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    isLoggedin();
  }, []);
  return (
    <Authcontext.Provider value={{login, logout, isLoading, setUserToken}}>
      {children}
    </Authcontext.Provider>
  );
};
