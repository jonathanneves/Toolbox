import React from 'react'
import { Text, Platform } from 'react-native'
import Estilo from './estilo'

export default props => {
    if(Plataform.OS === 'android')
        return <Text style={[Estilo.fontP, global.colorMode]}>Android</Text>
    else if (Platform.OS === 'ios')
        return <Text style={[Estilo.fontP, global.colorMode]}>iOS</Text>
    else
        return <Text style={[Estilo.fontP, global.colorMode]}>{Plataform.OS}</Text>
}