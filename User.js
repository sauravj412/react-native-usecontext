import React, {useContext} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Authcontext from './Authcontext';

const User = () => {
  // const {logout} = useContext(Authcontext);
  return (
    <ScrollView>
      <TouchableOpacity
      // onPress={() => {
      //   {
      //     logout();
      //   }
      // }}
      >
        <View style={styles.view}>
          <Ionicons name="exit-outline" size={20} />
          <Text>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default User;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
