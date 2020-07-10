import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'


//VAI SE IMPORTANTE FAZER ISSO PRA MONTAR A LISTA
export default props => {
    return (
        <>
            <Text style={[Estilo.fontG, global.colorMode]}> Membros da Família:</Text>
            {/*pegando os filhos que foi passado pelo componente familia*/} 
            {props.children} 
        </>
    )
}