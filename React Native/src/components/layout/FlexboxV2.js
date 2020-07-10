import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#50d1f6' />
            <Quadrado cor='#dd22c1' />
            <Quadrado cor='#8312ed' />
            <Quadrado cor='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        alignItems: "stretch",
        //flexGrow: 1, //cresce a view na tela
        justifyContent: "space-between", //"space-evenly distribui de forma igualitaria os itens deixando espaçamento"
        backgroundColor: '#fff'
    }
})