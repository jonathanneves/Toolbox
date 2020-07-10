import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'
import { TextInput } from 'react-native-gesture-handler'

//Importante para atualizar o feed
export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <Text style={[Estilo.fontP, global.colorMode]}>{nome}</Text>
            <TextInput
                placeholder="Digite seu Nome"
                style={[Estilo.fontP, global.colorMode]}
                value={null}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}