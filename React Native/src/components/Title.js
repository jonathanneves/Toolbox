import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    <> 
    {/*React.Fragment, Elementos ficam fora da View, precisa disso no return*/ }
        <Text style={[Estilo.fontG, global.colorMode]}>{props.principal}</Text>
        <Text style={[Estilo.fontP, global.colorMode]}>{props.secundario}</Text>
    </>
)