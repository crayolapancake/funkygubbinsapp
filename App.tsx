import './gesture-handler';
import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Home';
import Shop from './src/Shop';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Drawer = createDrawerNavigator();

  const statusBarBackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const scrollViewBackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  // redux / saga for state management
  // context api
  // implement typescript
  // add unit tests
  // add local storage (faves list)
  // etsy api

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: '#03f4fc',
          drawerLabelStyle: {
            color: Colors.dark,
            fontSize: 20,
            // fontFamily: 'Georgia',
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Funky Gubbins' }} />
        <Drawer.Screen name="Shop" component={Shop} options={{ title: 'Shop' }} />
        {/* <Drawer.Screen name="About Us" component={AboutUs} options={{ title: 'About' }}/> */}
      </Drawer.Navigator>
    </NavigationContainer>


  );
}

export default App;
