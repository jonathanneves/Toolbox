import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from './estilo'

export default ({inicial = 0, passo = 1}) => {
    //let numero = props.inicial
    const [numero, setNumero] = useState(inicial)  
    //seta o numero primeiro, e sempre que chama a segunda função ele atualiza os componentes na tela

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <>
            <Text style={[Estilo.txtG, global.colorMode]}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
} 