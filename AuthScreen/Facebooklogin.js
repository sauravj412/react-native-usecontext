import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  Profile,
} from 'react-native-fbsdk-next';
import LinearGradient from 'react-native-linear-gradient';

export default function Facebooklogin() {
  const Navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#4158D0', '#C850C0', '#FFCC70']}
      style={{
        flex: 1,
        borderRadius: 8,
        height: '60%',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

        <TouchableOpacity
          onPress={() => {
            Navigation.navigate('Signup');
          }}>
          <Text style={{marginTop: 10, fontSize: 15}}>
            New User ? Create A New Account
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
