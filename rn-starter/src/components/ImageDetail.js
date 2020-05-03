import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource}></Image>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;