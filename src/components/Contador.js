import React, {useState} from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

export default (props) => {
    const [numero, setNumero] = useState(props.inicio)
    console.warn(numero)

    function incrementar(){
        return setNumero(numero + 1) 
    
    }

    function decrementar(){
        return    setNumero(numero - 1)
    }

    return(
        <>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <Text>{numero}</Text>
        <TouchableOpacity style={styles.button}  onPress={decrementar}>
            <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        flexWrap: 'wrap',
        width:40,
        height:20,
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: '#455a64',
        marginTop: 10,
        borderRadius: 5,
    }, 
    text: {
        flexDirection:'row',
        fontSize: 20,
    }
})
