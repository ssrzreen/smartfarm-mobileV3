import { View, Text } from 'react-native'
import React from 'react'
import Background from '../../component/Background/BackgroundWelcome'
import WelcomeBtn from '../../component/Btn/WelcomeBtn'
import CallusBtn from '../../component/Btn/CallusBtn'
import MessageBtn from '../../component/Btn/MessageBtn'

const Welcome = ({navigation}) => {
    return (
        <Background>
             <View style={{flex: 1, marginHorizontal: 20, marginVertical: 450 }}>
                    <WelcomeBtn
                        Press={() => {
                            navigation.navigate('LoginPage');
                        }}
                        bgColor={"white"}
                        textColor={'black'}
                        btnLabel="เข้าสู่ระบบ"
                    />
                    <View style={{
                        flexDirection: 'row',
                        // justifyContent: 'center'
                        alignItems: 'center',
                        width: '120%'
                    }}>
                        <CallusBtn
                            bgColor={"white"}
                            textColor={'black'}
                            btnLabel="ติดต่อเรา" />
                        <MessageBtn
                            bgColor={"white"}
                            textColor={'black'}
                            btnLabel="ข้อความ" />

                    </View>

                </View>
        </Background>

    )
}

export default Welcome