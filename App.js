import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import EditScreen from './Screens/EditScreen';
import AddScreen from './Screens/AddScreen';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="EditScreen" component={EditScreen} />
                <Stack.Screen name="AddScreen" component={AddScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}