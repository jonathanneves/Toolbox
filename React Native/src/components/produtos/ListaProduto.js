import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    function obterLista(){
        return produtos.map(p => {
            return (
            //SEMPRE QUE TRABALHA COM MAP USA key={p.id} NA TAG, SEMPRE QUE TIVER UM UPDATE NO ELEMENTO ELE ATUALZA RAPIDAMENTE
            <Text key={p.id} style={[Estilo.fontP, global.colorMode]}>
                {p.id}) {p.nome} tem preço ${p.preco}
            </Text>
            )
        })
    }
    return (
        <>
            <Text style={[Estilo.fontG, global.colorMode]}>
                Lista de Produtos:
            </Text>
            {obterLista()}
        </>
    )
}