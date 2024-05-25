import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from '../../../../Image/Vector.png'

const ScanBtn = ({ Press }) => {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                flex: 1,
                // backgroundColor: "#008807",
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.5,
                // flexDirection: 'row',
                // height: 150,
                width: 135,
                marginLeft: -150,
                // marginHorizontal: 10,
                borderRadius: 20
            }}>
            {/* <View style={{ alignItems: 'center' }}>
                <Image
                    source={Icon}
                    style={{
                        height: 60,
                        width: 60,
                        marginVertical: 5
                    }} />

                <Text style={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>สแกน</Text>
            </View> */}
        </TouchableOpacity>
    )
}

export default ScanBtn