/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/redux/reducers';
import LoginScreen from './src/screens/LoginScreen';
import PanelScreen from './src/screens/PanelScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SingleScreen from './src/screens/SingleScreen';

const store = createStore(rootReducer);
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTintColor: '#ecf0f1', headerStyle: { backgroundColor: 'purple' } }} initialRouteName="Login">
            <Stack.Screen options={{
              title: 'Logowanie',
            }} component={LoginScreen} name="Login" />
            <Stack.Screen options={{
              title: 'Rejestracja',
              headerBackVisible: false,
            }} component={RegisterScreen} name="Register" />
            <Stack.Screen options={{
              title: 'Panel użytkownika',
              headerBackVisible: false,
            }} component={PanelScreen} name="Panel" />
            <Stack.Screen options={{
              title: "Meme",
              headerBackVisible: false,
            }} component={SingleScreen} name="Single" />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </PaperProvider>
  )
}

export type RootState = ReturnType<typeof store.getState>
export default App;
