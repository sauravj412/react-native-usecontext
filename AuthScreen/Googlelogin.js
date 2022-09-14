import React, {useState, useContext, useEffect} from 'react';
import {ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {Authcontext} from '../Authcontext';

const Googlelogin = ({navigation}) => {
  const {login} = useContext(Authcontext);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [out, setOut] = useState('');
  const [status, setStatus] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const Navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId:
        '1020658986757-ann6gnfulfuu85te7ckbrjh1r0qntkot.apps.googleusercontent.com',
      androidClientId:
        '1020658986757-8vqctfft84hkde20ukol9163mc756ie0.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      setuserInfo({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setStatus('Sign In Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        setStatus('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setStatus('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        setStatus('some  error happened');
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={['#0093E9', '#C850C0', '#80D0C7']}
      style={{
        flex: 1,
        borderRadius: 8,
        height: '60%',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>Login To Your Account</Text>
      </View>

      <ScrollView>
        <View style={styles.box}>
          <TextInput
            id="user"
            keyboardType="email-address"
            placeholder="Enter Your Username"
            style={styles.input}
            placeholderTextColor="white"
            defaultValue={user}
            onChangeText={x => {
              setUser(x);
            }}
          />

          <TextInput
            id="pass"
            keyboardType="default"
            placeholder="Enter Your Password"
            placeholderTextColor="white"
            style={styles.input}
            defaultValue={pass}
            secureTextEntry={true}
            onChangeText={y => {
              setPass(y);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            {
              login();
            }
          }}>
          <LinearGradient
            colors={['#A906FE', '#695AED', '#30AAEE']}
            style={styles.gradient}>
            <Text style={{color: 'white'}}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.googlebtn}>
          <GoogleSigninButton
            style={styles.GoogleSigninButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {
              signin();
            }}
          />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {status}
          </Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>The User Signed in is :</Text>
            <Text>{userInfo}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            signOut();
          }}>
          <Text
            style={{
              borderColor: 'white',
              borderRadius: 6,
              borderWidth: 1,
              color: 'white',
              width: '20%',
              padding: 6,
              backgroundColor: 'black',
            }}>
            Log Out
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            Navigation.navigate('Signup');
          }}>
          <Text style={styles.text1}>New User ? Create A New Account</Text>
        </TouchableOpacity>
        <View style={styles.out}>
          <Text style={styles.result}>{out}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Googlelogin;

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    width: '90%',
    marginVertical: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 12,
  },
  top: {
    flex: 1,
    color: 'blue',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  box: {
    flex: 2,
    color: 'white',
    marginVertical: 10,
    // paddingVertical: 22,
    fontSize: 25,
    fontFamily: 'Gill sans',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  button: {
    color: '#ffffff',
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    flex: 1,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    backgroundColor: 'transparent',
    borderRadius: 6,
    width: '85%',
  },
  gradient1: {
    borderRadius: 12,
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    fontSize: 20,
    //   width: '96%',
    //   height: '50%',
  },
  gradient: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 280,
    height: 50,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
  },
  text: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  ImageBackground: {
    flex: 1,
    flexDirection: 'column',
  },
  out: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  googlebtn: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
