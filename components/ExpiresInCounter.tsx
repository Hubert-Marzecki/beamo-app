import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import {KeyNames, Prod} from '../Model';


export default function ExpiresInCounter(props: {keyName:string, updateNewProduct: (keyName: KeyNames, value: any) => void }) {
    return (
        <View >
            <NumericInput onChange={value => props.updateNewProduct(KeyNames.ExpiresIn, value)}
                          totalWidth={300}
                          totalHeight={60}
                          iconSize={30}
                          step={1}
                          minValue={1}
                          rounded
                          textColor='#3d7383'
                          // iconStyle={{ color: '#4785c3' }}
                          rightButtonBackgroundColor='#EDC7C2'
                          leftButtonBackgroundColor='#EDC7C2'/>
        </View>
    )
}