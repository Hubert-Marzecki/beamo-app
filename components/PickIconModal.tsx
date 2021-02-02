import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, ScrollView } from 'react-native';
import { AppLoading, Font } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ListItem, Badge, Avatar } from 'react-native-elements';
import {Prod} from '../Model';

export default function PickIconModal(props: {isOpen: boolean, closeModal : () => void}) : JSX.Element {
    return (
        <Modal
        visible={props.isOpen}
        animationType="slide"
        transparent={false}
        onRequestClose={props.closeModal}
        >
            <View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    container: {

    },
    tile: {

    },
    icon: {

    }

})