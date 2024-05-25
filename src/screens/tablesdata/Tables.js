import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, FlatList, TouchableOpacity, ScrollView, Button, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgScreen from '../../Image/BgScreen.png'
import ConfirmBtn from '../../component/Btn/ConfirmBtn'
import QrIcon from '../../assets/icons/qrIcon.png'
import Logo from '../../Image/LogoCKC.png'
import ImageIcon from '../../assets/icons/image-searching.png'
import { Table, Row, TableWrapper, Rows } from 'react-native-table-component'
import Pinchable from 'react-native-pinchable';

const Tables = ({ navigation, route }) => {
    // console.log("this is props :" + route.params.dataProps)
    const [tree, setTree] = useState('')
    const [isVisible, setIsVisible] = useState(false);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getListTree();
    }, [])
    const getListTree = () => {
        {
            // this is for test URL image "https://fakestoreapi.com/products" 
            fetch("https://api.ckc.or.th/tree/", {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(res => {
                console.log("this is tree data : " + tree)
                setTree(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
    const handleOpenPopup = () => {
        setIsVisible(true);
    };
    const handleClosePopup = () => {
        setIsVisible(false);
    };
    const handleRefresh = () => {
        setRefresh(true)
        getListTree()
        setRefresh(false)

    }
    const OnSuccess = () => {
        const propData = route.params.licence_number
        console.log("this is check props : " + propData)
        navigation.navigate('DataTree', {
            dataProps: propData
        })
    }
    const ItemTreeView = ({ item }) => {
        console.log("this is a licence_id: " + item.licence_id)
        const headers = ['วันที่', 'สถานะต้นกล้า', 'รายละเอียด', 'บันทึกเพิ่มเติม', 'ความสูง', 'สีของใบ', 'ภาพ', 'สถานะภาพ']
        const rows = [
            [
                // item.id,
                item.date_time,
                item.seedling_status,
                item.details, item.note,
                item.height,
                item.leaf_color,
                <View >
                    <TouchableOpacity onPress={handleOpenPopup}>
                        <Image source={ImageIcon} style={styles.IconImage} />
                    </TouchableOpacity>

                    <Modal visible={isVisible} transparent={true} animationType="fade">
                        <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={handleClosePopup}>
                            <View style={styles.popupContainer}>
                                <Pinchable>
                                    <Image source={{ uri: item.path_img }} style={styles.image} />
                                </Pinchable>
                                <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
                                    <Text style={styles.closeButtonText}>ปิด</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>,

                item.plant_status,

            ],
        ]

        if (item.licence_id == route.params.licence_number) {
            return (
                <View style={styles.container}>
                    <View style={{ flex: 1, padding: 1 }}>
                        <Table borderStyle={{ borderWidth: 1 }}>
                            <Row data={headers} style={{ backgroundColor: '#FFFFFF' }}
                                height={40}
                                flexArr={[1, 1, 1, 1, 1, 1, 1.2, 1]}
                                textStyle={{
                                    textAlign: 'center'
                                }} />
                            <TableWrapper style={{ flexDirection: 'row' }}>
                                <Rows data={rows} heightArr={[80]} flexArr={[1, 1, 1, 1, 1, 1, 1.2, 1]}
                                    textStyle={{ textAlign: 'center' }}>
                                </Rows>
                            </TableWrapper>
                        </Table>
                    </View>
                </View>
            )
        } else {
            return null
        }
    }
    const ItemSeparatorView = () => {
        return (
            <View style={{ height: 10 }} />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.con}>
                <Image source={BgScreen} style={{ height: '100%', width: '100%', position: 'absolute' }} />
                <View style={{ padding: '4%' }} />
                <View
                    style={{ flex: 0.7 }}>
                    <View style={styles.container}>
                        <Image source={Logo} style={{ height: '30%', width: '100%', position: 'center' }} />
                        <View>
                            <Text style={{ fontSize: 25 }}>เลขทะเบียน : {route.params.project_code} </Text>
                            <Text style={{ fontSize: 25 }}>รหัส : {route.params.licence_number} </Text>
                            <Text style={{ fontSize: 25 }}>เลขแท็ค : {route.params.tracking_number} </Text>
                        </View>
                    </View>
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
                    refreshing={refresh}
                    onRefresh={handleRefresh}
                />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={{
                        top: -30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Scanner')
                    }>
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
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        height: 40,
        width: 40,
        position: 'absolute',
        top: '65%',
        right: 90
    },
    detailsContainer: {
        top: -30,
        paddingVertical: -50,
        paddingHorizontal: 20,
        flex: 0.3
    },
    image: {
        height: 500,
        width: 350,
        alignSelf: 'center'
    },
    IconImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    con: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    menuContainer: {
        top: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-evenly'
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    popupTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#008807',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

})

export default Tables