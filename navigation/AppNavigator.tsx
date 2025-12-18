import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import MapScreen from '../screens/Map';
import TerminalMap from '../screens/TerminalMap';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='About' component={AboutScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Map' component={ MapScreen } options={{headerShown: false }} />
      <Stack.Screen name='TerminalMap' component={TerminalMap} options={{headerShown: false }} />
      
    </Stack.Navigator>
  );
}
