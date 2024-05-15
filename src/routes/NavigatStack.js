import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '../screens/login/LoginPage';
import Welcome from '../screens/welcome/Welcome';
import HomePage from '../screens/home/HomePage';
import Scanner from '../screens/scanner/Scanner';
import Tables from '../screens/tablesdata/Tables';
import DataTree from '../screens/datainsert/DataTree';

// import { NavigationContainer } from '@react-navigation/native'
// import Home from '../screens/home/Home'
// import Login from '../screens/login/Login'
// import Register from '../screens/register/Register'
// import Welcome from '../screens/welcome/Welcome'
// import Scanner from '../screens/scanner/Scanner'
// import Scan from '../screens/scanner/testScanner'
// import TablesTracking from '../screens/tables/TablesTracking'
// import TestTables from '../screens/tables/TestTables'
// import DataInsert from '../screens/datainsert/Datainsert'
// import Reg from '../screens/register/TestReg'
// import TestLogin from '../screens/login/TestLogin'
// import TestTree from '../screens/tables/TestTree'
// import DataTreeInsert from '../screens/datainsert/DataTreeInsert'
// import DataTree from '../screens/datainsert/DataTree'
// import Tabs from './Tabs';
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const NavigatStack = () => {
    return (
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name='LoginPage' component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name='Scanner' component={Scanner} options={{ headerShown: false }} />
                <Stack.Screen name='Tables' component={Tables} options={{ headerShown: false }} />
                <Stack.Screen name='DataTree' component={DataTree} options={{ headerShown: false }} />

                {/* <Stack.Screen name='TestLogin' component={TestLogin} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name='Scanner' component={Scanner} options={{ headerShown: false }} />
                <Stack.Screen name='TablesTracking' component={TablesTracking} options={{ headerShown: false }} />
                <Stack.Screen name='TestTables' component={TestTables} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={Reg} options={{ headerShown: false }} />
                <Stack.Screen name='DataTreeInsert' component={DataTreeInsert} options={{ headerShown: false }} />
                <Stack.Screen name='TestTree' component={TestTree} options={{ headerShown: false }} />
                <Stack.Screen name='DataTree' component={DataTree} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={Register} /> */}
            </Stack.Navigator>
            
        // </NavigationContainer>
    )
}

export default NavigatStack
