import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.header}>Mixed media jewellery</Text>
      <View style={styles.underline}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 12,
  },
  header: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    width: '70%',
    alignSelf: 'center',
  },
});

export default Home