import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Newpage() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(false);

  const Fetch = async () => {
    try {
      const response = await fetch('');
      const Data = response.json();
      setData(Data);
      console.log(Data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Data fetched Successfully');
    }
  };
  useEffect(() => {
    fetch();
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor="skyblue"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View>
        <Text style={styles.text}>Assignments Result</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        style={styles.list}
        renderItem={({item}) => (
          <Text>
            {item.title}, {item.releaseYear}
          </Text>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setData(data);
          setResult(true);
        }}>
        <LinearGradient
          colors={['#A906FE', '#695AED', '#30AAEE']}
          start={{x: 0, y: 0}}
          style={styles.gradient}>
          <View>
            <Text>
              title=
              {result ? 'Thanks for taking the assessment' : 'Retake Asessment'}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      {/* <LinearGradient
        style={styles.gradients}
        colors={['blue', 'skyblue', 'pink']}
        start={{x: 0, y: 1}}></LinearGradient> */}
    </ScrollView>
  );
}

export default Newpage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C2C2C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '400',
    height: 61,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  ques: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    height: 30,
    alignItems: 'center',
    backgroundColor: '#1C2031',
  },
  ans: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    height: 36,
    alignItems: 'center',
    backgroundColor: '#1C2031',
  },
  list: {
    width: 350,
    height: 150,
    backgroundColor: '#1C2031',
    borderRadius: 10,
    marginVertical: 25,
    color: '#FFFFFF',
    fontFamily: 'SF UI Display',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 42,
    lineHeight: 50,
  },

  button: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '700',
    height: 61,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 280,
    height: 50,
  },
  buttontext: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '700',
  },
  gradients: {
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '300',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
  },
  test: {
    marginTop: 20,
    marginBottom: 12,
  },
});
