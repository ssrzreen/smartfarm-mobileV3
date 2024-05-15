import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgScreen from '../../Image/BgScreen.png'
import ConfirmBtn from '../../component/Btn/ConfirmBtn'
import QrIcon from '../../assets/icons/qrIcon.png'
import Logo from '../../Image/LogoCKC.png'
import { Table, Row, TableWrapper, Rows } from 'react-native-table-component'




const Tables = ({ navigation, route }) => {
    console.log("this is props :" + route.params.dataProps)
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState(route.params.dataProps);
    const [list, setList] = useState([])
    const [tree, setTree] = useState('')
    const [check, setCheck] = useState('');

    useEffect(() => {
        getListTracking();
        getListTree();
        console.log("this is data tree : " + tree)
    }, [])

    const getListTracking = () => {
        {
            fetch("https://api.ckc.or.th/tracking/", {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(res => {
                // console.log("this is Tracking data : " + res.data)
                setfilterData(res.data)
                setmasterData(res.data)

                if (res) {
                    setList(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
    const getListTree = () => {
        {
            // this is for test URL image "https://fakestoreapi.com/products" 
            fetch("https://api.ckc.or.th/tree/", {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(res => {
                // console.log("this is tree data : " + res.data)
                setTree(res)
                setfilterData(res.data)
                setmasterData(res.data)
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
            console.log("this is filter " + text)
        } else {
            setfilterData(masterData)
            setSearch(text)
        }
    }

    const OnSuccess = () => {
        const propData = route.params.dataProps
        console.log("this is check props : " + propData)
        navigation.navigate('DataTree', {
            dataProps: propData
        })
    }

    const ItemView = ({ item }) => {
        if (item.licence_number == route.params.dataProps) {
            // setCheck(item.id)
            setCheck(item.licence_number)
            console.log("this is check : " + check)
            return (
                <View style={styles.container}>
                    <Image source={Logo} style={{ height: '35%', width: '100%', position: 'center' }} />
                    <View>
                        <Text style={{ fontSize: 25 }}>เลขทะเบียน : {item.project_code} </Text>
                        <Text style={{ fontSize: 25 }}>รหัส : {item.licence_number} </Text>
                        <Text style={{ fontSize: 25 }}>เลขแท็ค : {item.tracking_number} </Text>
                    </View>
                    {/* <View style={styles.header}>
                        <Text style={styles.heading}>วันที่</Text>
                        <Text style={styles.heading}>รหัส</Text>
                        <Text style={styles.heading}>เลขแท็ค</Text>
                        <Text style={styles.heading}>ทะเบียน</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cell}>date : {item.created_at}</Text>
                        <Text style={styles.cell}>licence number : {item.licence_number}</Text>
                        <Text style={styles.cell}>tracking number : {item.tracking_number}</Text>
                        <Text style={styles.cell}>project code : {item.project_code}</Text>
                    </View> */}
                </View>

            )
        } else {
            return (
                null
            )
        }

    }

    const ItemTreeView = ({ item }) => {
        const headers = ['id', 'date', 'status', 'details', 'note', 'temperature', 'plant_status', 'grower_id']
        const rows = [
            [item.id, item.date_time, item.seedling_status, item.details, item.note, item.temperature, item.plant_status, item.grower_id],
        ]
        if (route.params.dataProps == item.licence_id) {
            // console.log("this is a id: " + item.id)
            return (
                <View style={styles.container}>
                    <View style={{ flex: 1, padding: 5 }}>
                        <Table borderStyle={{ borderWidth: 1 }}>
                            <Row data={headers} style={{ backgroundColor: '#FFFFFF' }}
                                height={40}
                                flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                                textStyle={{
                                    textAlign: 'center'
                                }} />
                            <TableWrapper style={{ flexDirection: 'row' }}>
                                <Rows data={rows} heightArr={[100]} flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                                    textStyle={{ textAlign: 'center' }} />
                            </TableWrapper>
                        </Table>
                        {/* <Image source={Logo} style={{ height: '35%', width: '100%', position: 'center' }} /> */}
                        {/* <View style={styles.header}>
                        <Text style={styles.heading}>id</Text>
                        <Text style={styles.heading}>date</Text>
                        <Text style={styles.heading}>status</Text>
                        <Text style={styles.heading}>details</Text>
                        <Text style={styles.heading}>note</Text>
                        <Text style={styles.heading}>temperature</Text>
                        <Text style={styles.heading}>plant_status</Text>
                        <Text style={styles.heading}>grower_id</Text>

                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>{item.id}</Text>
                        <Text style={styles.cell}>{item.date_time}</Text>
                        <Text style={styles.cell}>{item.seedling_status}</Text>
                        <Text style={styles.cell}>{item.details}</Text>
                        <Text style={styles.cell}>{item.note}</Text>
                        <Text style={styles.cell}>{item.temperature}</Text>
                        <Text style={styles.cell}>{item.plant_status}</Text>
                        <Text style={styles.cell}>{item.grower_id}</Text>
                    </View> */}

                        {/* <Image source={{ uri : item.path_img}} style={styles.image}/> */}
                        {/* <Image source={{ uri : item.image}} style={styles.image}/> */}
                        {/* { item.path_img !== '' ? <Image source={item.path_img} /> :null} */}

                    </View>
                </View>
            )
        } else {
            return (
                null
            )
        }

    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: -10, width: '100%' }} />
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }} >
        <View style={styles.con}>
            <Image source={BgScreen} style={{ height: '100%', width: '100%', position: 'absolute' }} />
            <TextInput
                style={styles.textInputStyle}
                value={search}
                underlineColorAndroid='transparent'
                onChangeText={(text) => searchFilter(text)} />
            <View
                style={{ flex: 1 }}>
                <FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.buttonContainer}>
                    <ConfirmBtn
                        Press={OnSuccess}
                        bgColor={"#008807"}
                        textColor={'#FFFFFF'}
                        btnLabel="เพิ่ม" />
                </View>
            </View>

            <FlatList
                style={{ flex: 1 }}
                data={tree}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemTreeView}
            />
          
        </View>
        <View style={styles.menuContainer}>
                    {/* <TouchableOpacity
                        // style={styles.buttonStyle}
                        onPress={() => navigation.navigate("HomePage",{})}
                        >
                        <Image
                            source={HomeIcon}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                // tintColor: focused ? '#748c94' : '#FFFFFF'
                            }}
                        />
                        <Text style={{ fontSize: 15 }}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => navigation.navigate("History")}>
                        <Image
                            source={HistoryIcon}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                // tintColor: focused ? '#748c94' : '#FFFFFF'
                            }}
                        />
                        <Text>History</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity
                        style={{
                            top: -30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => navigation.navigate('Scanner')
                        }
                    >
                        <View style={{
                            width: 80,
                            height: 80,
                            borderRadius: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#FFFFFF',
                        }}>

                            <View style={{
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                backgroundColor: '#008807',
                            }}>
                                <Image
                                    source={QrIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: 70,
                                        height: 45,
                                        marginHorizontal: 'center',
                                        marginVertical: 10,
                                        tintColor: '#FFFFFF'
                                    }}
                                />
                            </View>
                        </View>

                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => navigation.navigate("Profile")}>
                        <Image
                            source={ProfileIcon}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                // tintColor: focused ? '#748c94' : '#FFFFFF'
                            }}
                        />
                        <Text>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => navigation.navigate("Setting")}>
                        <Image
                            source={SettingIcon}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                // tintColor: focused ? '#748c94' : '#FFFFFF'
                            }}
                        />
                        <Text>Setting</Text>
                    </TouchableOpacity> */}
                </View>
    </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -10,
        right: 100
    },
    detailsContainer: {
        top: -30,
        paddingVertical: -50,
        paddingHorizontal: 20,
        flex: 0.3
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20
    },
    image: {
        height: 200,
        width: 200
    },
    errorStyle: {
        color: 'red',
        fontSize: 18
    },
    con: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: "100",
        paddingHorizontal: 'auto',
        height: 200
    },
    headerTopBar: {
        backgroundColor: '#6AB7E2',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 2,
        marginBottom: 15
    },
    headerTopBarText: {
        color: '#fff',
        fontSize: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0.1,
        alignContent: 'center'
    },
    heading: {
        flex: 0.5,
        padding: 1,
        fontSize: 15
    },

    itemStyle: {
        padding: 15
    },
    textInputStyle: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        // borderColor: '#00968',
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems : 'center',
        marginVertical: '8',
        marginHorizontal: -10,
        elevation: 10,
        borderRadius: 3,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff'
    },
    cell: {
        fontSize: 15,
        textAlign: 'center',
        flex: 1
    },
    menuContainer: {
        // flex: 1,
        top: 10 ,
        width: '105%',
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-evenly'
    },

})

export default Tables