import './gesture-handler';
import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Home';
import Shop from './src/shop/Shop';
import About from './src/About';
import MyAccount from './src/MyAccount';
import Basket from './src/Basket';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Drawer = createDrawerNavigator();

  const statusBarBackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const scrollViewBackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  // redux / saga for state management or context api
  // implement typescript
  // add unit tests
  // add local storage (faves list)

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: '#03f4fc',
          drawerLabelStyle: {
            color: Colors.dark,
            fontSize: 20,
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Funky Gubbins' }} />
        <Drawer.Screen name="Shop" component={Shop} options={{ title: 'Shop' }} />
        <Drawer.Screen name="Basket" component={Basket} options={{ title: 'Basket' }} />
        <Drawer.Screen name="My Account" component={MyAccount} options={{ title: 'My Account' }} />
        <Drawer.Screen name="About Us" component={About} options={{ title: 'About Us' }} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;
