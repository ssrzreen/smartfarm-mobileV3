import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../screens/login/LoginPage';
import Welcome from '../screens/welcome/Welcome';
import HomePage from '../screens/home/HomePage';
import Scanner from '../screens/scanner/Scanner';
import Tables from '../screens/tablesdata/Tables';
import DataTree from '../screens/datainsert/DataTree';
const Stack = createStackNavigator()
const NavigatStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name='LoginPage' component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name='Scanner' component={Scanner} options={{ headerShown: false }} />
            <Stack.Screen name='Tables' component={Tables} options={{ headerShown: false }} />
            <Stack.Screen name='DataTree' component={DataTree} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default NavigatStack
