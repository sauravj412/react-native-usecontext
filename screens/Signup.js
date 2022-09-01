import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
import LinearGradient from 'react-native-linear-gradient';

function Signup() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [pass, setPass] = useState('');
  const [gmail, setGmail] = useState('');
  const [cpass, setCpass] = useState('');
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.ImageBackground}
      resizeMode="cover"
      source={require('../Zimages/signupimage.png')}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.top}>
          <Text style={styles.header}>Create a New Account</Text>
        </View>

        <LinearGradient
          colors={['#662D8C', '#ED1E79']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          locations={[0.75, 0.25]}
          style={styles.gradient1}>
          <View style={styles.box}>
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your First Name"
              style={styles.input}
              defaultValue={first}
              onChangeText={x => {
                setFirst(x);
              }}
            />
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your Second Name"
              style={styles.input}
              defaultValue={second}
              onChangeText={x => {
                setSecond(x);
              }}
            />
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your Email ID"
              style={styles.input}
              defaultValue={gmail}
              onChangeText={x => {
                setGmail(x);
              }}
            />
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your Password"
              style={styles.input}
              defaultValue={pass}
              onChangeText={x => {
                setPass(x);
              }}
            />

            <TextInput
              keyboardType="email-address"
              placeholder="Confirm Password"
              style={styles.input}
              defaultValue={cpass}
              onChangeText={x => {
                setCpass(x);
              }}
            />
          </View>
        </LinearGradient>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            alert('Clicked!');
          }}>
          <LinearGradient
            colors={['#C33764', '#1D2671']}
            start={{x: 1.2, y: 1}}
            style={styles.gradient}>
            <Text>Submit</Text>
          </LinearGradient>

          <Text>Already Signed?</Text>
        </TouchableOpacity>
        <View style={styles.last}>
          <TouchableOpacity
            // style={styles.text}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.text2}>Login To Your Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 4,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
  },
  input: {
    borderColor: 'gray',
    width: '90%',
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 12,
  },
  ImageBackground: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradient1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: '90%',
    height: '60%',
  },
  gradient: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 280,
    height: 50,
  },
  last: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    flex: 1,
    color: 'blue',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
