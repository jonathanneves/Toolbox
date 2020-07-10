import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'
import { FlatList } from 'react-native-gesture-handler'

export default props => {
    const produtoRender = ({ item: p }) =>{
        return  <Text style={[Estilo.fontP, global.colorMode]}>{p.id}) {p.nome} - ${p.preco}</Text>
    }

    return (
        <>
            <Text style={[Estilo.fontG, global.colorMode]}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i=>`${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}