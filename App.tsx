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
import LoginScreen from './src/screens/LoginScreen';
import PanelScreen from './src/screens/PanelScreen';
import SingleScreen from './src/screens/SingleScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTintColor: '#ecf0f1', headerStyle: { backgroundColor: 'purple' } }} initialRouteName="Login">
          <Stack.Screen options={{
            title: 'Logowanie',
          }} component={LoginScreen} name="Login" />
          <Stack.Screen options={{
            title: 'Panel użytkownika',
          }} component={PanelScreen} name="Panel" />
          <Stack.Screen options={{
            title: "Meme",
          }} component={SingleScreen} name="Single" />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;
