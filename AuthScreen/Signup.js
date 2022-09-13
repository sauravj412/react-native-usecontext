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
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [pass, setPass] = useState('');
  const [gmail, setGmail] = useState('');
  const [cpass, setCpass] = useState('');
  const Navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#4158D0', '#C850C0', '#FFCC70']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      locations={[0.2, 0.6, 1.2]}
      style={{
        flex: 1,
        borderRadius: 8,
        height: '60%',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>Login To Your Account</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>
          <LinearGradient
            colors={['#fbc2eb', '#a6c1ee', '#C850C0']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            locations={[0.2, 0.6]}
            style={styles.box}>
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your First Name"
              style={styles.input}
              defaultValue={first}
              placeholderTextColor="white"
              onChangeText={x => {
                setFirst(x);
              }}
            />
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your Second Name"
              style={styles.input}
              defaultValue={second}
              placeholderTextColor="white"
              onChangeText={x => {
                setSecond(x);
              }}
            />
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your Email ID"
              placeholderTextColor="white"
              style={styles.input}
              defaultValue={gmail}
              onChangeText={x => {
                setGmail(x);
              }}
            />
            <TextInput
              keyboardType="email-address"
              placeholder="Enter Your Password"
              placeholderTextColor="white"
              style={styles.input}
              defaultValue={pass}
              onChangeText={x => {
                setPass(x);
              }}
            />

            <TextInput
              keyboardType="email-address"
              placeholder="Confirm Password"
              placeholderTextColor="white"
              style={styles.input}
              defaultValue={cpass}
              onChangeText={x => {
                setCpass(x);
              }}
            />
          </LinearGradient>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            alert('Clicked!');
          }}>
          <LinearGradient
            colors={['#C33764', '#1D2671']}
            start={{x: 1.2, y: 1}}
            style={styles.gradient}>
            <Text style={{color: 'white'}}>Submit</Text>
          </LinearGradient>

          <Text>Already Signed?</Text>
        </TouchableOpacity>
        <View style={styles.last}>
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate('Googlelogin');
            }}>
            <Text style={styles.text2}>Login To Your Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

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
    fontSize: 20,
    backgroundColor: 'blue',
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
