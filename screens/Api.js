import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

function Api() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const Fetch = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log('Api Called Successfully');
    }
  };

  useEffect(() => {
    Fetch();
  }, []);
  return (
    <SafeAreaView contentContainerStyle={styles.container}>
      <ScrollView>
        <StatusBar
          backgroundColor="skyblue"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({id}, index) => id}
              style={styles.list}
              renderItem={({item}) => (
                <Text>
                  {item.title}, {item.releaseYear}
                  {console.log(item.title)}
                </Text>
              )}
            />
          )}

          <View>
            <Button
              title="Fetch Data"
              onPress={() => {
                Fetch();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Api;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: 380,
    height: 800,
    backgroundColor: '#1C2031',
    borderRadius: 6,
    marginVertical: 25,
    marginLeft: 20,
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 42,
    lineHeight: 50,
  },
});
