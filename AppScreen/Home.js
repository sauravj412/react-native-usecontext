import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';

function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor="skyblue"
        barStyle="dark-content"
        hidden={false}
      />

      <Text style={styles.top}>Hello World!</Text>
      <Icon name="home" color="orange" size={50} />
      <Text style={styles.text}>Welcome to Native Project1</Text>
    </ScrollView>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    fontSize: 40,
    color: 'orange',
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'green',
    borderColor: 'black',
    borderRadius: 12,
    borderWidth: 1,
  },
});
