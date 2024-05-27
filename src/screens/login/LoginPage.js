import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../Image/Bglogin.png'


const LoginPage = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);
    const [checkEmail, setCheckEmail] = useState('')
    const [check, setCheck] = useState('')

    
    useEffect(() => {
        getDataMembers();
    }, [])


    const getDataMembers = () => {
        {
            fetch("https://api.ckc.or.th/member/", {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(res => {
                // console.log("this is Tracking data : " + res.data)
                setfilterData(res)
                setmasterData(res)
                if (res) {
                    setList(res)
                    // console.log(res)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                setCheckEmail(item.email)
                const itemData = item.email ? item.email : " ";
                setCheck(checkEmail)
                const textData = text
                return itemData.indexOf(textData) > -1
            })
            setfilterData(newData)
            setSearch(text)
        } else {
            setfilterData(masterData)
            setSearch(text)
        }
    }

    const searchPasswordFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                // setCheckEmail(item.email)
                const itemData = item.password_user ? item.password_user : " ";
                // setCheck(checkEmail)
                // console.log('this is res : ' + item.password_user)
                // console.log('this is res password : ' + item.password_user)
                const textData = text
                return itemData.indexOf(textData) > -1
            })
            setfilterData(newData)
            setPassword(text)
            // console.log("this is filter password " + text)
        } else {
            setfilterData(masterData)
            setPassword(text)
        }
    }


    const OnSuccess = () => {
        masterData.filter((item) => {
            // const check = e.data
            const res = item.email
            console.log(search)
            const checkSearch = search

            const resPass = item.password_user
            const checkPassword = password
            if (res == checkSearch && resPass == checkPassword) {
                // console.log('work')
                // console.log('this is members :' + item.member_type)
                navigation.navigate('HomePage', {
                    nameuser: item.name,
                    level: item.gl_level,
                    member: item.enroll_no,
                    region: item.region,
                    province: item.provinceID
                    // image : item.path_required
                })
                // console.log(item.email)
            } else {
                // console.log('this logic not work')

            }
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <ImageBackground source={Background} resizeMode='cover' style={styles.image}>
                <View style={{ marginVertical: -15 }}></View>
                <View
                    style={{
                        width: '50%',
                        marginHorizontal: '25%',
                        alignItems: 'center',
                    }}>

                    <TextInput
                        placeholder='อีเมลผู้ใช้'
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => searchFilter(text, setSearch(text))}
                    />

                    <TextInput
                        placeholder='รหัสผ่าน'
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => searchPasswordFilter(text, setPassword(text))}
                    />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        top: '2%'
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                OnSuccess()
                            }}
                            style={styles.loginButton}>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    textInputStyle: {
        // height: 50,
        // borderWidth: 1,
        // paddingLeft: 20,
        // margin: 5,
        // borderColor: '#00968',
        backgroundColor: 'white',
        width: '120%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    inputText: {
        height: 50,
        color: "white"
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    loginButton: {
        // flex: 1,
        opacity : 0,
        backgroundColor: "#05770B",
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        width: 150,
        marginRight: -5,
        borderRadius: 20
    }
})

export default LoginPage