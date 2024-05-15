import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '../../Image/Lock.png'

const WelcomeBtn = ( { Press , bgColor, btnLabel, textColor }) => {
    return (
        <TouchableOpacity 
        onPress={Press}
        style={{
            // backgroundColor: bgColor,
            // borderRadius: 100,
            // alignItems: 'center',
            // width: 350,
            // height: 50,
            // paddingVertical: 5,
            // marginVertical: 10
            flex: 1,
            backgroundColor: bgColor,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: 50,
            width: '120%',
            marginVertical: 15,
            // marginRight: 30,
            borderRadius: 100
        }}>
            <Image
                source={Icon}
                style={{
                    height: 36,
                    width: 36,
                    marginRight: 8
                }}
                // resizeMethod='contain' 
                />

            <Text style={{
                color: textColor,
                fontSize: 25,
                fontWeight: 'bold'
            }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default WelcomeBtn