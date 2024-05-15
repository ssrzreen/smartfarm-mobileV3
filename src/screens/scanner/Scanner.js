import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'

const Scanner = ({ navigation }) => {
    const [list, setList] = useState([])
    const dataURL = "https://api.ckc.or.th/tracking/"

    const [data, Setdata] = useState('scan something')

    useEffect(() => {
        getListTracking();
    }, [])

    const getListTracking = () => {
        {
            fetch("https://api.ckc.or.th/tracking/", {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(res => {
                if (res) {
                    setList(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const onSuccess = (e) => {
        const check = e.data
        // itemData()
        { data } Setdata(e.data)
        if (check != null) {
            console.log(check)
            navigation.navigate('Tables' , {
                dataProps: check
            })
        } else {
        }
    }

    return (
        <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
        topContent={
            <View>
                <Text
                    style={{
                        color: 'black',
                        padding: 20,
                        fontSize: 20,
                        backgroundColor: 'grey',
                        margin: 10,
                    }}>{data}
                </Text>
            </View>
        }/>
    )
}

export default Scanner