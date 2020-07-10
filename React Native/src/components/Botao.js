import React from 'react'
import { Button } from 'react-native'
import Estilo from './estilo'

export default props => {

    function executar(){
        console.warn("Exec #01!!!!!!")
        global.colorMode = [Estilo.fontWhite];
    }

    return (
        <>
            <Button 
                title="Executar #01!"
                onPress={executar}
            />
            <Button 
                title="Executar #02!"
                onPress={function(){
                    console.warn('Exec #02!!!')
                    global.colorMode = [Estilo.fontDark];
                }}
            />
            <Button 
                title="Executar #03!"
                onPress={() => console.warn('Exec #03!!!')}
            />
        </>
    )
}
