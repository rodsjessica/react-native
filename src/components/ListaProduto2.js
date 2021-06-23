import React from 'react'
import { Text, FlatList } from 'react-native'
import produtos from './Produtos/produtos'
import Titulo from '../components/Titulo'

export default (props) => {
    const produtoRender = ({ item: item }) => {
        return <Text>
            {item.id} {item.nome} {item.preco}
        </Text>
    }
    return (
        <>
            <Titulo title="Lista de Produtos V2" />
            <FlatList data={produtos} keyExtractor={(i) => `${i.id}`} renderItem={produtoRender} />
        </>
    )
}