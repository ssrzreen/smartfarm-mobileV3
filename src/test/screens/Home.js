import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button
                title='Tap me'
                onPress={() => {
                    navigation.navigate('Details', {
                        productId: 89,
                        otherParam: 'Details Params'
                    })
                }} />
        </View>
    )
}

export default Home