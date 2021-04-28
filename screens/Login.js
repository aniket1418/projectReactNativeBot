import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
}


export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    }
})  