import { View, Text, SafeAreaView, ImageBackground, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ScanBtn from './components/btn/ScanBtn';
import MailBtn from './components/btn/MailBtn';
import CallUsBtn from './components/btn/CallUsBtn';
import Background from '../../Image/BgHome.png'
import UnKnow from '../../Image/unknow.png'


const HomePage = ({ navigation, route }) => {
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [list, setList] = useState([])
    const [search, setSearch] = useState();
    return (
        <SafeAreaView style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <ImageBackground source={Background} resizeMode='cover' style={styles.imageBg}>
                <View style={styles.container}>
                    <Image style={styles.image} source={UnKnow} />
                    <View style={styles.containerText}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.viewSubTextStyle}>
                                <Text style={styles.headerText}> ระดับ </Text>
                                <Text style={styles.subTextLevel}>GL{route.params.level}</Text>
                            </View>
                            <View style={styles.viewSubStyle}>
                                <Text style={styles.headerText}> ประเภทการปลูก </Text>
                                <Text style={styles.subText}>GREEN HOUSE</Text>
                            </View>
                        </View>

                        <View style={styles.viewTextStyle}>
                            <Text style={styles.headerText}> ชื่อ-สกุล </Text>
                            <Text style={styles.subText}>{route.params.nameuser}</Text>
                        </View>

                        <View style={styles.viewTextStyle}>
                            <Text style={styles.headerText}> เลขทะเบียน </Text>
                            <Text style={styles.subText}>{route.params.member}</Text>
                        </View>

                        <View style={styles.viewTextStyle}>
                            <Text style={styles.headerText}> ภาค </Text>
                            <Text style={styles.subText}>{route.params.region}</Text>
                        </View>

                        <View style={styles.viewTextStyle}>
                            <Text style={styles.headerText}> จังหวัด </Text>
                            <Text style={styles.subText}>{route.params.province}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            top: 30,
                            marginVertical: 320,
                            marginHorizontal: -160
                        }}
                    >
                        <ScanBtn
                            Press={() => {
                                navigation.navigate('Scanner')
                            }} />
                    </View>

                    <View
                        style={{
                            top: 25,
                            marginVertical: 320,
                            marginHorizontal: 180
                        }}>
                        <MailBtn />
                        <CallUsBtn />
                    </View>
                </View>
            </ImageBackground >
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        top: 200,
        flexDirection: 'row',
        display: 'flex',
    },
    containerText: {
        // flex: 1,
        top: "-2%",
        alignItems: 'center',
    },
    viewTextStyle: {
        top: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 200,
        height: 45,
        marginVertical: 3
    },
    viewSubTextStyle: {
        top: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 80,
        height: 45,
        margin: 5,
        marginVertical: 3
    },
    viewSubStyle: {
        top: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 120,
        height: 45,
        marginVertical: 3
    },
    headerText: {
        fontSize: 15
    },
    subText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    subTextLevel: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#05770b',
        top: -10
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 55,
        borderColor: 'black',
        borderWidth: 3,
        marginLeft: 30,
        marginTop: 10
    },
    imageBg: {
        flex: 1,
        justifyContent: 'center',
    },
})


export default HomePage