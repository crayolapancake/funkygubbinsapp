import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, StatusBar, Text, View, ScrollView, useColorScheme } from 'react-native';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const unmountedRef = useRef(false)

  const [newCustomer, setNewCustomer] = useState(false);

  const depenency = true;

  useEffect(() => {
    // check if it's a new customer

    const isNewCustomer = true;
    if (isNewCustomer) {
      // do  a thing
      setNewCustomer(true);
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
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Mixed media jewellery</Text>
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
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    width: '70%',
    alignSelf: 'center',
  },
});

export default Home