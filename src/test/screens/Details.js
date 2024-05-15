import { View, Text } from 'react-native'
import React from 'react'

const Details = ({ navigation , route}) => {
    const {productId, otherParam} = route.params
  return (
    <View>
      <Text>productId : {productId} otherParam : {otherParam}</Text>
    </View>
  )
}

export default Details