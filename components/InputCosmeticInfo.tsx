import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { KeyNames } from '../Model';

export default function  InputCosmeticInfo (props: {keyName: KeyNames, updateNewProduct : (keyName: KeyNames, val: any) => void , label: string}) {

    return (
        <View style={styles.container}>
            <Input style={styles.input}
                   label={props.label}
                   labelStyle={{alignSelf: 'stretch', color: 'black', paddingTop: 30}}
                   inputStyle={{color: '#3D7383'}}
                   onChangeText={val => props.updateNewProduct(props.keyName, val )}
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
        backgroundColor: '#EDC7C2',
        justifyContent: 'center',
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
        color: '#3D7383', textDecorationLine: 'none'
    }
})