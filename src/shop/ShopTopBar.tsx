import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type BarProps = {
  count: number
};

const ShopTopBar = ({ count }: BarProps) => {
  return (
    // todo add functionality and return relevant or organised shopData
    <View style={styles.barView}>
      <View style={styles.row}>
        <Text style={styles.text}>Search | </Text>
        <Text style={styles.text}>Filter</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Sort By | </Text>
        <Text style={styles.text}>Results: {count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barView: {
    marginVertical: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.dark,
  }
});

export default ShopTopBar