import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

//export default props => {
export default ({ min, max}) => {
    //const { min, max } = props  
    const delta = max - min + 1;
    const RandomNumber = Math.floor(Math.random()* (delta)+min); 
    setTimeout(() => Math.floor(Math.random()* (delta)+min), 2000)
 
    return(
        <Text style={[Estilo.fontP, global.colorMode]}>Número aleatório : {RandomNumber} </Text>
    )
}