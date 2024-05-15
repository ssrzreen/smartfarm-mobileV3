import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Background from '../../Image/background.png';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import RegisInput from '../../component/RegisterInput/RegisInput';
import ConfirmBtn from '../../component/Btn/ConfirmBtn';
import CancelBtn from '../../component/Btn/CancelBtn';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;
const DataTree = ({ navigation, route }) => {
    console.log("this is props form testTables :" + route.params.dataProps)
    const [licence_id, setLicence_id] = useState(route.params.dataProps)
    const [seedling_status, setSeedling_status] = useState('');
    const [details, setDetails] = useState('');
    const [note, setNote] = useState('');
    const [plant_status, setPlant_status] = useState('');
    const [grower_id, setGrower_id] = useState('')

    const [selectedImage, setSelectedImage] = useState(null);
    const [data, setData] = useState('')

    const [upload, setUpload] = useState(false);
    const [avatar, setAvatar] = useState('');

    const seeds = [
        { value: 'ต้นกล้า' },
        { value: 'ต้นอ่อน' },
        { value: 'ต้นเต็มวัย' }
    ]

    const plant = [
        { value: 'ปกติ' },
        { value: 'พบปัญหา' },
        { value: 'ตาย' }
    ]

    const noHandler = () => {
        setSeedling_status('')
        setDetails('')
        setNote('')
        setPlant_status('')
        setGrower_id('')
    }


    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, handleResponse);
    };

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, handleResponse);
    };


    const handleResponse = (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('Image picker error: ', response.error);
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
            setData(imageUri)
            setUpload(imageUri)

        }
    };

    const uploadImage = (image_uri) => {
        setUpload(true)
        let base_url = "https://api.ckc.or.th/tree/"
        let uploadData = new FormData();
        uploadData.append('Submit', 'ok');
        uploadData.append('file', {
            type: 'image/jpg', uri: image_uri
            , name: 'uploadimagetmp.jpg'
        })
        fetch(base_url, {
            method: 'post',
            body: uploadData
        }).then(response => response.json()).then(response => {
            if (response.status) {
                setUpload(false)
                setAvatar(base_url + response.image)
            } else {
                setUpload(false)
                // Alert.alert('Error', response.message)
            }
        }).catch(() => {
            setUpload(false)
            Alert.alert('Error', 'Error on network.')
        })
    }


    const InsertRecord = () => {
        if (seedling_status.length == 0) {
            Alert.alert("Required field is Missing")
        } else {
            InsertAPIURL = "https://api.ckc.or.th/tree/";
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            Data = {
                licence_id: licence_id,
                seedling_status: seedling_status,
                details: details,
                note: note,
                plant_status: plant_status,
                grower_id: grower_id,
                path_img: upload
            };

            fetch(InsertAPIURL,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(Data)
                }
            )
                .then((response) => response.json())
                .then((response) => {
                    uploadImage(upload)
                    Alert.alert(
                        'ยืนยันบันทึกข้อมูลต้นกล้า',
                        licence_id,
                        [
                            { text: 'ยืนยัน', onPress: () => console.log('บันทึกเรียบร้อย') },
                            { text: 'ยกเลิก', onPress: () => noHandler() }
                        ]
                    );
                    console.log(Data)
                })
                .catch((error) => {
                    Alert.alert("Error" + error);
                    console.log('error' + error)
                })
        }
    }

    const cancel = () => {
        setSeedling_status('')
        setDetails('')
        setNote('')
        setPlant_status('')
        setGrower_id('')
        setUpload(null)
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ImageBackground source={Background} resizeMode='cover' style={styles.image}>

                <RegisInput
                    placeholder={'licence_id'}
                    value={licence_id}
                    setValue={setLicence_id}
                />

                {/* <RegisInput
                    placeholder={'Seed'}
                    value={category}
                    setValue={setSeedling_status}
                /> */}
                <SelectList
                    value={seedling_status}
                    setSelected={setSeedling_status}
                    data={seeds}
                    placeholder='สถานะต้นกล้า'
                    defaultOption={{ value: 'ต้นกล้า' }}
                    search={false}
                    boxStyles={{ backgroundColor: "#FFFFFF", borderRadius: 5, width: "100%" }}
                    dropdownStyles={{ backgroundColor: "#FFFFFF" }}
                />

                <RegisInput
                    placeholder={'รายละเอียด'}
                    value={details}
                    setValue={setDetails} />

                <RegisInput
                    placeholder={'บันทึกเพิ่มเติม'}
                    value={note}
                    setValue={setNote}
                />

                {/* <RegisInput
                    placeholder={'Plant'}
                    value={plant_status}
                    setValue={setPlant_status}
                /> */}
                <SelectList
                    value={plant_status}
                    setSelected={setPlant_status}
                    data={plant}
                    placeholder='สถานะของพืช'
                    defaultOption={{ value: 'ต้นกล้า' }}
                    search={false}
                    boxStyles={{ backgroundColor: "#FFFFFF", borderRadius: 5, width: "100%" }}
                    dropdownStyles={{ backgroundColor: "#FFFFFF" }}
                />
                <RegisInput
                    placeholder={'Grower'}
                    value={grower_id}
                    setValue={setGrower_id}
                />


                <View style={styles.container}>
                    {selectedImage && (
                        <Image
                            source={{ uri: selectedImage }}
                            style={{ width: "50%", height: "60%", top: 20 }}
                        // resizeMode="contain"
                        />
                    )}
                    <View style={{
                        marginTop: 40,
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity
                            onPress={openImagePicker}
                            style={styles.bottonImage}>
                            <Text style={styles.textImage}>เลือกภาพ</Text>
                        </TouchableOpacity>
                        <View style={{ marginHorizontal: 10 }}>
                            <TouchableOpacity style={styles.bottonImage}
                                onPress={handleCameraLaunch}>
                                <Text style={styles.textImage}>ถ่ายภาพ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 50 }}>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                    marginVertical: 10
                }}>
                    <ConfirmBtn
                        Press={InsertRecord}
                        bgColor={"#05770B"}
                        textColor={'#FFFFFF'}
                        btnLabel="ยืนยัน" />

                    <CancelBtn
                        Press={cancel}
                        bgColor={"#D9D9D9"}
                        textColor={'black'}
                        btnLabel="ยกเลิก" />
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        padding: 20,
        marginTop: 10,
    },

    textStyle:
    {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20,
    },
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: "70%",
        maxWidth: 500,
        height: 100,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        top: 5
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: 'green',
        marginTop: 20,
        borderRadius: 25,
        padding: 15,
        color: '#F9F9CF9'
    },
    bottonImage: {
        backgroundColor: "#D9D9D9",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        width: 150,
        borderRadius: 100
    },
    textImage: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default DataTree