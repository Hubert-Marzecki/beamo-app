import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';

export default function AddCosmeticModal({open, closeModal}) {

    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            onRequestClose={closeModal}
        >
            <View
                style={styles.container}
            >
                <Text style={styles.header}>Add new product</Text>

                <Pressable
                    style={styles.addButton}
                    onPress={() => console.log("da")}>
                    <Text>Add</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
        backgroundColor: '#EEE7DE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        fontWeight: 'bold',
        color: '#3D7383',
        fontSize: 20,
    },
    addButton:{

    }
})