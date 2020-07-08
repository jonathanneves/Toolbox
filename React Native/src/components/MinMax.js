import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => ( //(props)
    //console.warn(props)
    <Text style={[Estilo.fontP,  global.colorMode]}>
        O Valor {props.max} é o maior que o valor {props.min}!
    </Text>
)