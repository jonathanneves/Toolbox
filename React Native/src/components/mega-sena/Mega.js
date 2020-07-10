import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './MegaNumero'


export default class Mega extends React.Component { //puxa a variavel definida na tag em App.js e não precisa de props

    /*constructor(props){
        super(props)
        
        this.state = {
            qntdNumeros: props.qntdNumeros
        }
    }*/

    /*constructor(props){
        super(props)

        this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)  
        //sempre que o this for chamado dentro dessa função vai ser apontado para o mesmo this dentro da função
    }*/

    state = {
        qntdNumeros: this.props.qntdNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qntdNumeros: +qtde })    //this dentro de uma array function nunca muda, não precisa arrow function
    }     //inteiro = +'11' +(string)

    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 50) + 1
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qntdNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumerosNaoContido(nums)], [])
            .sort((a, b) => a - b)  //Ordem descrescente
        this.setState({ numeros })
    }

    /*gerarNumeros = () => {
        const { qtdeNumeros } = this.state
        const numeros = []
        for(let i=0; i<qtdeNumeros; i++){
            const novo = this.gerarNumerosNaoContido(numeros)
            numeros.push(n)
        }
        numeros.sort((a, b)=> a-b)
        this.setState({ numeros })
    }*/

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render(){
        return (
            <>
                <Text style={[Estilo.fontG, global.colorMode]}>
                    Gerador de Mega-Sena!!! 
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:0.5}, [Estilo.fontP, global.colorMode]}
                    placeholder="Qtde de números"
                    value={`${this.state.qntdNumeros}`}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{ 
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
                {/*
                <Text style={[Estilo.fontP, global.colorMode]}>
                    {this.state.numeros.join(' - ')}
                    //Precisa do this neste caso pois estamos usando React.Component
                </Text>
                */}
            </>
        )
    }
}