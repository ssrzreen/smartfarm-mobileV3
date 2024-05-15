import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigatStack from './NavigatStack'

const MainNav = () => {
    return (
        <NavigationContainer>
            {NavigatStack()}
        </NavigationContainer>
    )
}

export default MainNav