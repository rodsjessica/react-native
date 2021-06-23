import React from 'react'
import { Text, Button, TouchableOpacity } from 'react-native'

export default (props) => {
    function cadastrar() {
        console.warn('cadastrou!!');
    }
    return (
        <>
            <Button title="Cadastrar" onPress={cadastrar}></Button>
            {/* <TouchableOpacity onPress={cadastrar}>
                <Text>Cadastrar</Text>
            </TouchableOpacity> */}
        </>
    )

}