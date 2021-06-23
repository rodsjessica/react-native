import React from 'react'
import { Text } from 'react-native'

export default (props) => {
    return (
        <>
            <Text>{props.title}</Text>
            <Text>{props.subtitle}</Text>
        </>
    )
}