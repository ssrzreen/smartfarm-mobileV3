import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from '../../../../Image/Envelope.png'

const MailBtn = () => {
  return (
    <TouchableOpacity
            onPress={() => console.log("this is call")}
            style={{
                flex: 1,
                backgroundColor: "#008807",
                // alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                // flexDirection: 'row',
                height: 80,
                width: 210,
                marginLeft : -25,
                // marginHorizontal: 10,
                borderRadius: 30
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
                }}>ข้อความ</Text>
            </View> */}
        </TouchableOpacity>
  )
}

export default MailBtn