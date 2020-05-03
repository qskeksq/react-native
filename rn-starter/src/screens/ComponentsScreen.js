import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greeting = <Text>Hello to you!</Text>

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={styles.subHeaderStyle}>{greeting}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;