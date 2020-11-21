import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    return action.type === "change_amount" ? { ...state, amount: state.amount + action.payload } : state;
}

const CounterScreen = () => {
    const [{ amount }, dispatch] = useReducer(reducer, { amount: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ type: 'change_amount', payload: 1 })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'change_amount', payload: - 1 })}  />
           <Text>Current Count: {amount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;