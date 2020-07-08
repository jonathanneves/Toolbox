import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Estilo from './estilo'


export default() => {
    //console.log('DEBUG!') //Para isso preciso do retur, nao funciona em arrow function
    
    return(
        <Text style={[Estilo.fontG,  global.colorMode]}>Primeiro Componente!!!</Text>
    )
}
