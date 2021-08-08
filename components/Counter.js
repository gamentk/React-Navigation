import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

function Counter(props) {
    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);

        console.log(counter)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>Counter is: {counter}</Text>
            <Button title="Increase" onPress={() => { increaseCounter() }} />
            <Text>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counter: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default Counter;