import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import BgScreen from '../../Image/BgScreen.png'

const BackgroundHome = ({ children }) => {
    return (
        <View>
            <ImageBackground source={BgScreen} style={{ height: '100%'}} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>

        </View>
    )
}

export default BackgroundHome