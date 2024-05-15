import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import background from '../../Image/bgwelcome.jpg'

const Background = ({ children }) => {
    return (
        <View>
            <ImageBackground source={background} style={{ height: '100%' }} />
            <View style={{ position: 'absolute'}}> 
                {children}
            </View>
        </View>
    )
}

export default Background