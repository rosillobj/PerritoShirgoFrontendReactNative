import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login,SignUp,Welcome } from './screens'; 



const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
        name= "Welcome"
        component={Welcome}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
        name="Login"
        component={ Login }
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown:false
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

