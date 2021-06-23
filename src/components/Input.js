import React, {useState} from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

export default (props) => {
    const [nome, setNome] = useState('')
    return(
        <View>
            <Text>{nome}</Text>
            <TextInput placeholder="Digite seu Nome"
            value={nome}
            onChangeText={(nome) => {setNome(nome)}}
            />
        </View>
    )
}
