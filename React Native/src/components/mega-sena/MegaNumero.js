import React from 'react'
import {  Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default ({ num }) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.fontG, style.color]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 25,
        justifyContent: "center",
    },
    Num: {
        color: '#000'
    }
})