import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Background from '../../Image/background.png';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import TextFiledInput from '../../component/TextFiledInput/TextFiledInput';
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
    const [height, setHeight] = useState('');
    const [leaf_color, setLeaf_color] = useState('');
    const [grower_id, setGrower_id] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);

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

    const onSuccessAlert = () => {
        console.log('บันทึกเรียบร้อย')
        navigation.goBack()
    }

    const openImagePicker = () => {
        const options = {
            mediaType: 'file',
            accept: 'image',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, handleResponse);
    };

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'file',
            accept: 'image',
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
        }
    };
    const InsertRecord = () => {
        if (seedling_status.length == 0) {
            Alert.alert("Required field is Missing")
        } else {
            let InsertAPIURL = "https://api.ckc.or.th/tree/";
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            // let uploadData = new FormData();
            // uploadData.append('Submit', 'ok');

            // const result = uploadData.append('file', {
            //     type: 'image/jpg', uri: selectedImage
            //     , name: 'uploadimagetmp.jpg'
            // })

            Data = {
                licence_id: licence_id,
                seedling_status: seedling_status,
                details: details,
                note: note,
                plant_status: plant_status,
                // grower_id: grower_id,
                height: height,
                leaf_color : leaf_color,
                path_img: selectedImage
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
                    // uploadImage(selectedImage)
                    Alert.alert(
                        'ยืนยันบันทึกข้อมูลต้นกล้า',
                        licence_id,
                        [
                            { text: 'ยืนยัน', onPress: () => onSuccessAlert() },
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
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ImageBackground source={Background} resizeMode='cover' style={styles.image}>

                <TextFiledInput
                    placeholder={'licence_id'}
                    value={licence_id}
                    setValue={setLicence_id}
                />
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

                <TextFiledInput
                    placeholder={'รายละเอียด'}
                    value={details}
                    setValue={setDetails} />

                <TextFiledInput
                    placeholder={'บันทึกเพิ่มเติม'}
                    value={note}
                    setValue={setNote}
                />

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
                <TextFiledInput
                    placeholder={'ความสูง'}
                    value={height}
                    setValue={setHeight}
                />
                <TextFiledInput
                    placeholder={'สีของใบ'}
                    value={leaf_color}
                    setValue={setLeaf_color}
                />

                {/* <TextFiledInput
                    placeholder={'Grower'}
                    value={grower_id}
                    setValue={setGrower_id}/> */}
                
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