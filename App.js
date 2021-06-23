import React from 'react'
import { View, StyleSheet } from 'react-native'
// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Component1, Component2 } from './src/components/Multi'
// import Exercicio2 from './src/components/Exercicio2'
// import MinMax from './src/components/MinMax'
import Titulo from './src/components/Titulo'
// import Botao from './src/components/Botao'
// import Contador from './src/components/Contador'
// import Pai from './src/components/Direta/Pai'
import ListaProdutos from './src/components/ListaProdutos'
import ListaProduto2 from './src/components/ListaProduto2'
import Input from './src/components/Input'

export default function App() {
  return (
    <View style={style.container}>
      <ListaProdutos></ListaProdutos>
      <ListaProduto2/>
      <Input/>
      {/* <Primeiro></Primeiro>
      <Exercicio2></Exercicio2>
      <MinMax min={4} max={15}></MinMax> */}
      {/* <Titulo title="Olá" subtitle="Tudo bem?!"></Titulo> */}
      {/* <Botao></Botao>
      <Contador inicio={0}></Contador>
      <Pai></Pai> */}
    </View>

  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: '#ffa726',


  }
})