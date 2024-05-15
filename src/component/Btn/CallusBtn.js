import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from '../../Image/iconphone.png'

const CallusBtn = ({ bgColor, btnLabel, textColor }) => {
    return (
        <TouchableOpacity
            onPress={() => console.log("this is call us")}
            style={{
                flex: 1,
                backgroundColor: bgColor,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 50,
                // width: 150,
                // paddingHorizontal : 10,
                marginRight: 10,
                // padding: 10,
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
                fontSize: 20,
                fontWeight: 'bold'
            }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default CallusBtn