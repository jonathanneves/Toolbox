import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Estilo from './estilo'

export default function(){
    return <Text style={[Estilo.fontP,  global.colorMode]}>Comp #Oficial</Text>
}

export function Comp1(){
    return <Text style={[Estilo.fontP,  global.colorMode]}>Comp #01</Text>
}

export function Comp2(){
    return <Text style={[Estilo.fontP,  global.colorMode]}>Comp #02</Text>
}

//export { Comp1, Comp2 }