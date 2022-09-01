import React, {useState, useContext} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import Signup from './Signup';
import Authcontext from '../Authcontext';

const Login = ({navigation}) => {
  const data = useContext(Authcontext);
  console.log(data);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [out, setOut] = useState('');
  const [state, setState] = useState('');
  const [status, setStatus] = useState('');
  const Navigation = useNavigation();
  GoogleSignin.configure({
    webClientId:
      '1020658986757-ann6gnfulfuu85te7ckbrjh1r0qntkot.apps.googleusercontent.com',
    offlineAccess: true,
  });

  const SignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setStatus('Sign in Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        setStatus('Loading..');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setStatus('Google Play Services are not Installed on Your Device');
      } else {
        setStatus('Some Error Ocurred!');
      }
    }
  };

  const click = () => {
    if (user == 'Saurav' && pass == 12345) {
      setOut('Login Successfully');
    } else if (user == '' || pass == NaN) {
      alert('Both Fields Are Mandatory');
    } else {
      setOut('Userid or Password Incorrect');
    }
  };

  return (
    <ImageBackground
      style={styles.ImageBackground}
      resizeMode="cover"
      source={require('../Zimages/backgroungimg.png')}>
      <View style={styles.top}>
        <Text style={styles.text}>Login To Your Account</Text>
      </View>

      <ScrollView>
        <LinearGradient
          colors={['#FF61D2', '#1BFFFF']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.gradient1}>
          <View style={styles.box}>
            <TextInput
              id="user"
              keyboardType="email-address"
              placeholder="Enter Your Username"
              style={styles.input}
              defaultValue={user}
              onChangeText={x => {
                setUser(x);
              }}
            />

            <TextInput
              id="pass"
              keyboardType="phone-pad"
              placeholder="Enter Your Password"
              style={styles.input}
              defaultValue={pass}
              secureTextEntry={false}
              maxLength={6}
              onChangeText={y => {
                setPass(y);
              }}
            />
          </View>
        </LinearGradient>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => {
          //   {
          //     login();
          //   }
          // }}
        >
          <LinearGradient
            colors={['#A906FE', '#695AED', '#30AAEE']}
            style={styles.gradient}>
            <Text>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Sign in with google */}
        <View style={styles.googlebtn}>
          <GoogleSigninButton
            style={styles.GoogleSigninButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {
              SignIn();
            }}
          />
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                alert('login has error: ' + result.error);
              } else if (result.isCancelled) {
                alert('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  let accessToken = data.accessToken;
                  alert(accessToken.toString());

                  const responseInfoCallback = (error, result) => {
                    if (error) {
                      console.log(error);
                      alert('Error fetching data: ' + error.toString());
                    } else {
                      console.log(result);
                      alert('Success fetching data: ' + result.toString());
                    }
                  };

                  const infoRequest = new GraphRequest(
                    '/me',
                    {
                      accessToken: accessToken,
                      parameters: {
                        fields: {
                          string: 'email,name,first_name,middle_name,last_name',
                        },
                      },
                    },
                    responseInfoCallback,
                  );

                  // Start the graph request.`
                  new GraphRequestManager().addRequest(infoRequest).start();
                });
              }
            }}
            onLogoutFinished={() => alert('logout.')}
          />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}> {status}</Text>
        </View>
        <Text>New User?</Text>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate('Signup');
          }}>
          <Text style={styles.text1}>Create A New Account</Text>
        </TouchableOpacity>
        <View style={styles.out}>
          <Text style={styles.result}>{out}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

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
    flex: 3,
    color: 'white',
    marginVertical: 10,
    paddingVertical: 21,
    fontSize: 20,
    fontFamily: 'Gill sans',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    color: '#ffffff',
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
    fontSize: 20,
    marginLeft: 50,
    fontWeight: 'bold',
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
    fontSize: 30,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  googlebtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
