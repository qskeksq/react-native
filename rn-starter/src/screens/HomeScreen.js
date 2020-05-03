import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>Home Screen Hi~</Text>
      <Button 
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Componenets Demo"
      />
      <Button 
        title="Go to List Demo"
        onPress={() => props.navigation.navigate('List')}
      />
      <Button 
        title="Go to Image List Demo"
        onPress={() => props.navigation.navigate('Images')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

