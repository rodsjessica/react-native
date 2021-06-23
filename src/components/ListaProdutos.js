import React from 'react'
import { Text } from 'react-native'
import produtos from './Produtos/produtos'
import Titulo from '../components/Titulo'

export default (props) => {
    function obterLista() {
        return produtos.map(
            (item) => {
                return (
                    <Text>
                        {item.id} {item.nome} {item.preco}
                    </Text>
                )
            }
        )
    }
    return (
        <>
        <Titulo title ="Lista de Produtos"/> 
        {obterLista()}
        </>
    )

}