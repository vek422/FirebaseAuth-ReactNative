import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import Signup from './Screens/Signup';
import ForgotPass from './Screens/ForgotPass';
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Signup" options={{headerShown:false}} component={Signup}/>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login}  />
      <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}  />
      <Stack.Screen options={{headerShown:false}} name="ForgotPass" component={ForgotPass}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
