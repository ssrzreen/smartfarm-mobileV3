import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import IconHome from '../../assets/icons/homeIcon.png'
import Details from '../screens/Details';
import BottomTab from './BottomTab';
import History from '../screens/History';
import Scanner from '../screens/Scanner';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
    const tabs = [
        {
            id: 0,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            headerShown:false,
            name: 'Home',
            component: Home
        },
        {
            id: 1,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'Details',
            component: Details
        },
        {
            id: 2,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'Setting',
            component: Setting
        },
        {
            id: 3,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'History',
            component: History
        },
        {
            id: 4,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'Scanner',
            component: Scanner
        },
        
    ]
    return (
        <Tab.Navigator tabBar={props => <BottomTab {...props} />}
            screenOptions={{
                headerShown: false,
            }}>
            {
                tabs.map((item, index) => (
                    <Tab.Screen 
                    key={index}
                    initialParams={{
                        activeIcon: item.activeIcon,
                        inactiveIcon: item.inactiveIcon,
                    }}
                    name={item.name}
                    component={item.component}
                    />
                ))
            }

        </Tab.Navigator>
    )
}

export default BottomTabBar