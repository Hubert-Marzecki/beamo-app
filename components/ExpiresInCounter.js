import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import NumericInput from 'react-native-numeric-input';


export default function ExpiresInCounter({keyName, updateNewProduct }) {
    return (
        <View >
            <NumericInput onChange={value => updateNewProduct(keyName, value)}
                          totalWidth={300}
                          totalHeight={60}
                          iconSize={30}
                          step={1}
                          minValue={1}
                          rounded
                          textColor='#4785c3'
                          iconStyle={{ color: '#4785c3' }}
                          rightButtonBackgroundColor='#aad7f8'
                          leftButtonBackgroundColor='#aad7f8'/>
        </View>
    )
}