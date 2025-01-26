import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';


const Basket = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.subtext}>Basket coming soon!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 12,
  },
  subtext: {
    fontSize: 38,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 24,
  }
});

export default Basket