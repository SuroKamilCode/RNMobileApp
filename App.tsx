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
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { strings } from './src/localization/localization';
import rootReducer from './src/redux/reducers';
import LoginScreen from './src/screens/LoginScreen';
import PanelScreen from './src/screens/PanelScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SingleScreen from './src/screens/SingleScreen';

const store = createStore(rootReducer);
const Stack = createNativeStackNavigator();

const App = () => {

  const [lang, setLang] = React.useState<string | any>('');

  if (lang === '') {
    strings.setLanguage('pl');
  }

  return (
    <PaperProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTintColor: '#ecf0f1', headerStyle: { backgroundColor: 'purple' } }} initialRouteName="Login">
            <Stack.Screen name="Login" options={{ title: strings.loginPage }}>
              {(props) => <LoginScreen setLang={setLang} {...props} />}
            </Stack.Screen>
            <Stack.Screen options={{
              title: strings.registerPage,
              headerBackVisible: true,
            }} component={RegisterScreen} name="Register" />
            <Stack.Screen options={{
              title: strings.panelPage,
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
