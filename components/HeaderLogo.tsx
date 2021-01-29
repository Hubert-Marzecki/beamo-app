import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, ScrollView } from 'react-native';
import { AppLoading, Font } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ListItem, Badge, Avatar } from 'react-native-elements';

export default  function HeaderLogo( ) {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo_text6.png')} />
        </View>
    )
}


const styles = StyleSheet.create({
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        width: 50,
        height: 30
    },
    logo: {
        height: 100,
        width: 100
    }
})