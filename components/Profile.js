import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

// import Separator from './Separator';
// import Badge from './Badge';

const ProfileDetails = () => {
  return (
    <View>
      <Text>Profile Details Go Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});
export default ProfileDetails;
