import React from 'react'  //import do JSX que transforma JS em uma view HTML. OBRIGATÓRIO
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native' //Componente Text

import Primeiro from './components/Primeiro'
import CompOficial, { Comp1, Comp2 } from './components/Multi' //Oficial é dafult. Comp1 e 2 não são
import MinMax from './components/MinMax'
import Random from './components/Aleatorio'
import Estilo from './components/estilo'
import Titulo from './components/Title'
import Botao from './components/Botao'
import Contador from './components/Contador'
import PaiDireto from './components/direta/Pai'
import PaiIndireto from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'

export default () => (
    <SafeAreaView style={style.AppBlack}>
        <StatusBar/>
        <ContadorV2/>
        <Titulo principal="Cadastro Produto" secundario = "Tela de Cadsatro"/>
        <Botao />
        <Contador inicial={50} passo={5}/>
        <PaiDireto/>
        <PaiIndireto/>

        {/*<Text style={[Estilo.fontP, global.colorMode]}>{"Código JS: "+(1+1)}</Text>*/}
        {/* Valor numerico entre {} - String entre "" */}
        {/*<MinMax min={3} max={20}/>
        <MinMax min="1" max="5"/> 
        <Random min="1" max="20"/> */}
        {/* Vou precisar disso para criar as view com api de noticias */}
        <CompOficial/>
        <Comp1/>   
        <Comp2/>
        <Primeiro/>
    </SafeAreaView>
)

const style = StyleSheet.create({
    AppBlack: {
        backgroundColor: 'black',
        flexGrow: 1,
        justifyContent: "center", //Centraliza na vertical da tela
        alignItems: "center",      //Centraliza na horizontal da tela
        padding: 20
    },
    AppWhite: {
        backgroundColor: 'black',
        flexGrow: 1,
        justifyContent: "center", //Centraliza na vertical da tela
        alignItems: "center",      //Centraliza na horizontal da tela
        padding: 20
    }
})


/*function App (){
    return (
        <View>
            <Primeiro/> 
        </View>
    );
}

export default App*/

/*const App = function (){
    //const jsx = <Text>MEU PRIMEIRO APP</Text>
    //return jsx;
    return <Text>Primeiro Componente!</Text>; 
}

export default App*/

/*export default function () {
    return <Text>Primeiro Componente!</Text>; 
}*/
