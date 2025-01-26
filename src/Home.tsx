import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const unmountedRef = useRef(false)
  const depenency = true;

  useEffect(() => {
    // check if it's a new customer

    const isNewCustomer = true;
    if (isNewCustomer) {
      // do  a thing
      // setNewCustomer(true);
    }
  }, [depenency]);

  useEffect(() => {
    return () => {
      unmountedRef.current = true
    }

    // Cleanup logic should stop or undo whatever the setup is doing.
    return () => {
      console.log('cleanup here')
    }
  }, [])

  const exampleCallback = useCallback(() => {
    if (true) {
    }
  }, [depenency]);


  // const exampleUseMemo = useMemo(
  //   // () => console.log('usememo value here'),
  //   [depenency],
  // );

  // todo move theme into context
  // const isDarkMode = useColorScheme() === 'dark';

  // const statusBarBackgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // const scrollViewBackgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
  // };



  return (
    // todo move safe area to parent
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