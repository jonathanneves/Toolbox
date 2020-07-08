import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <View style={style.Display}>
        <Text style={[Estilo.fontP, style.DisplayText]}>
            {props.num}
        </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: 'red',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: 'blue'
    }
})