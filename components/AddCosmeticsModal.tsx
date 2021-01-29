import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, KeyboardAvoidingView } from 'react-native';
import InputCosmeticInfo from './InputCosmeticInfo';
import DatePicker from './DatePicker';
import NumericInput from 'react-native-numeric-input';
import ExpiresInCounter from './ExpiresInCounter';
import { Header } from 'react-native-elements';
import MoveBack from './MoveBack'
import {Prod} from '../Model';
import { KeyNames } from '../Model';
var uuid = require('react-native-uuid');

export default function AddCosmeticModal(props: {open: boolean, closeModal: () => void, addProductToList : (prod: Prod) => void}) : JSX.Element {

    const inistalState : Prod = {
        name: "",
        type: "",
        opened: {},
        expiresIn: 0,
        icon: "",
        photo: "",
        id: ""
    }

    const  [newCosmetic, setNewCosmetic] = useState<Prod>(inistalState);

    const updateNewProduct  = (keyName: string, val ?: object | Date | undefined ) : void => {
        setNewCosmetic(s => ({...s,  [keyName]: val}))
        console.log(newCosmetic)
    }
    function addProdToListAndResetNewProd  (prod:Prod) : void {
        props.addProductToList(prod);
        updateNewProduct(KeyNames.Id, uuid.v1())
        setNewCosmetic(inistalState);
    }

    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.open}
            onRequestClose={props.closeModal}
        >


            <KeyboardAvoidingView
                // @ts-ignore
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
                    leftComponent={<MoveBack closeModal={props.closeModal}/>}
                />
                <View style={styles.body}>
                <Text style={styles.header}>ADD NEW PRODUCT</Text>
                <InputCosmeticInfo keyName={KeyNames.Name} label={"Name"} updateNewProduct={updateNewProduct} />
                <InputCosmeticInfo keyName={KeyNames.Type} label={"Type"} updateNewProduct={updateNewProduct} />
                <DatePicker  updateNewProduct={updateNewProduct}/>
                <View style={styles.numPickerWrapper}>
                <Text style={styles.label}> EXPIRE IN MSC. </Text>
                <ExpiresInCounter keyName={'expiresIn'} updateNewProduct={updateNewProduct}/>
                </View>

                    <View style={styles.buttonWrapper}>
                        <Pressable onPress={() => addProdToListAndResetNewProd(newCosmetic)}>
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
        color: '#4785c3',
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
        backgroundColor: '#4785c3',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e7eef5',
        borderWidth: 5,
        marginTop: 40,

    },
    buttonText:{
        fontSize: 30,
        fontWeight: "bold",
        color: '#EEE7DE'
    }
})