import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flewGrow: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    V0: {
        backgroundColor: '#36c9a7',
        height: 100,
    },
    V1: {
        backgroundColor: '#ff801a',
        flex: 3
    },
    V2: {
        backgroundColor: '#dd22c1',
        flew: 1
    }
})