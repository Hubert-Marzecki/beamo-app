import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, TextInput } from 'react-native';
import { Input } from 'react-native-elements';

export default function  InputCosmeticInfo ({keyName, updateNewProduct, label}) {



    return (
        <View style={styles.container}>
            <Input style={styles.input}
                   label={label}
                   labelStyle={{alignSelf: 'stretch', color: 'black', paddingTop: 30}}
                   inputStyle={{color: 'grey'}}
                   onChangeText={val => updateNewProduct(keyName, val )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        alignSelf: 'stretch',
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: '#e7eef5',
        justifyContent: 'center',
        shadowColor: "#ff0000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 5.22,
        elevation: 3,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 3,
        marginBottom: 3,
    },
    input: {
        color: '#4785c3', textDecorationLine: 'none'
    }
})