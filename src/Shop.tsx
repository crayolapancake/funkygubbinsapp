import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Shop = () => {

  // todo subcategoiries

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Shop</Text>
        <View style={styles.underline}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 24
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    width: '70%',
    alignSelf: 'center',
  },
});

export default Shop