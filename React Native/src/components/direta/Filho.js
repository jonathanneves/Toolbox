import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

export default props => {

    return (
        <>
            <Text style={[Estilo.fontP, global.colorMode]}>{"Direta: "+props.a + " -- "+props.b}</Text>
        </>
    )
}