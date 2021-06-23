import React from 'react'
import { Text } from 'react-native'

export default (props) => {
    console.warn(props)
    console.warn(props.min)
    console.warn(props.max)
    return (
        <>
            <Text> O valor {props.max} é maior que o valor {props.min}</Text>
        </>
    )

}