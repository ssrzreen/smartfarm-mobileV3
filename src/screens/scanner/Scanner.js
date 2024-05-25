import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'

const Scanner = ({ navigation }) => {
    const [list, setList] = useState([])
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState('');
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
                setfilterData(res)
                setmasterData(res.data)
                if (res) {
                    setList(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.licence_number ? item.licence_number : " ";
                const textData = text
                return itemData.indexOf(textData) > -1
            })
            setfilterData(newData)
            setSearch(text)
            console.log('this is search : ' + search)
        } else {
            setfilterData(masterData)
            setSearch(text)
        }
    }

    const onSuccess = (e) => {
        const check = e.data
        if (check != null) {
            searchFilter(check)
            masterData.filter((item) => {
                const res = item.licence_number
                const checkSearch = search
                if (res == checkSearch) {
                    console.log('work')
                    console.log('this is item Tracking :' + item.id)
                    navigation.navigate('Tables', {
                        project_code: item.project_code,
                        licence_number: item.licence_number,
                        tracking_number: item.tracking_number,
                    })
                    return res == null 
                } else {
                    // console.log('this logic not work')
                }
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