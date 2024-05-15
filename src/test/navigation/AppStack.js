import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import Details from '../screens/Details'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabBar from './BottomTabBar'
import History from '../screens/History'
import Scanner from '../screens/Scanner'
import Setting from '../screens/Setting'
const Stack = createNativeStackNavigator()
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={BottomTabBar} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='History' component={History} />
            <Stack.Screen name='Scanner' component={Scanner} />
            <Stack.Screen name='Setting' component={Setting} />
        </Stack.Navigator>
    )
}

export default AppStack