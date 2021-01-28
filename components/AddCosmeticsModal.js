import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, KeyboardAvoidingView } from 'react-native';
import InputCosmeticInfo from './InputCosmeticInfo';
import DatePicker from './DatePicker';
import NumericInput from 'react-native-numeric-input';
import ExpiresInCounter from './ExpiresInCounter';
import { Header } from 'react-native-elements';
import MoveBack from './MoveBack'

export default function AddCosmeticModal({open, closeModal, addProductToList}) {

    const  [newCosmetic, setNewCosmetic] = useState({
        name: "",
        type: "",
        opened: {},
        expiresIn: "",
        icon: "",
        photo: "",
    });

    const updateNewProduct = (key, val) => {
        setNewCosmetic(s => ({...s,  [key]: val}))
        console.log(newCosmetic)
    }

    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            onRequestClose={closeModal}
        >


            <KeyboardAvoidingView
                style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
                style={styles.container}
            >
                <Header
                    containerStyle={{
                        backgroundColor: '#e7eef5',
                        height: 80,
                    }}
                    leftComponent={<MoveBack closeModal={closeModal}/>}
                />
                <View style={styles.body}>
                <Text style={styles.header}>ADD NEW PRODUCT</Text>
                <InputCosmeticInfo keyName={"name"} label={"Name"} updateNewProduct={updateNewProduct} />
                <InputCosmeticInfo keyName={"type"} label={"Type"} updateNewProduct={updateNewProduct} />
                <DatePicker  updateNewProduct={updateNewProduct}/>
                <View style={styles.numPickerWrapper}>
                <Text style={styles.label}> EXPIRE IN MSC. </Text>
                <ExpiresInCounter keyName={'expiresIn'} updateNewProduct={updateNewProduct}/>
                </View>

                    <View style={styles.buttonWrapper}>
                        <Pressable onPress={() => addProductToList(newCosmetic)}>
                            <Text style={styles.buttonText}>ADD</Text>
                        </Pressable>
                    </View>

                </View>


                <View style={styles.footer}>

                </View>

            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7eef5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        fontWeight: 'bold',
        color: '#aad7f8',
        fontSize: 20,
        marginBottom: 15,
        marginTop: 40,

    },
    body:{
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#e7eef5',
    },
    numPickerWrapper:{
        alignItems: 'flex-start',
    },
    label:{
        fontWeight: 'bold',
        color: '#4785c3',
        fontSize: 15,
        paddingLeft: 12,
        marginTop: 10,
        marginBottom: 5
    },
    footer:{
        flex: 1,
        height: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper:{
        width: 150,
        height: 70,
        borderRadius: 40,
        backgroundColor: "#aad7f8",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e7eef5',
        borderWidth: 5,
        marginTop: 10,

    },
    buttonText:{
        fontSize: 30,
        fontWeight: "bold",
        color: '#EEE7DE'
    }
})