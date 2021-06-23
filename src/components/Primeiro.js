import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default () => {
    return (
        <View>
            <Text style={style.text}>Hello world</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        backgroundColor: '#616161',
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#ffffff'

    }
})