import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import background from '../../Image/backgroundlog.png'

const BackgroundLogin = ({ children }) => {
    return (
        <View>
            <ImageBackground source={background} style={{ height: '100%', alignContent: 'center' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    )
}

export default BackgroundLogin