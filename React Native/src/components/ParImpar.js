import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    //if(num % 2 === 0){
    return (
        <View>
            {num % 2 === 0 
                ? <Text style={[Estilo.fontP, global.colorMode]}>Par</Text>
                : <Text style={[Estilo.fontP, global.colorMode]}>Ímpar</Text>
            }
        </View>
    )

}