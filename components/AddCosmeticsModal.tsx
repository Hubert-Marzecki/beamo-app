import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, KeyboardAvoidingView } from 'react-native';
import InputCosmeticInfo from './InputCosmeticInfo';
import DatePicker from './DatePicker';
import NumericInput from 'react-native-numeric-input';
import ExpiresInCounter from './ExpiresInCounter';
import { Header } from 'react-native-elements';
import MoveBack from './MoveBack'
import {Prod} from '../Model';
import { KeyNames } from '../Model';
// var uuid = require('react-native-uuid');

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
    const [isIconModalVisible, setIsIconModalVisible] = useState<boolean>(false)
    const updateNewProduct  = (keyName: string, val ?: object | Date | undefined ) : void => {
        setNewCosmetic(s => ({...s,  [keyName]: val}))
    }
    function addProdToListAndResetNewProd  (prod:Prod) : void {
        props.addProductToList(prod);
        // const id = uuid.v1()
        // updateNewProduct(KeyNames.Id, id)
        setNewCosmetic(inistalState);
    }

    function closeIconModal() {
        setIsIconModalVisible(false)
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
                        backgroundColor: '#EEE7DE',
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
                <View>
                    <Pressable>
<Text>DUPA?</Text>
                    </Pressable>
                    <Pressable>
                        <Text>DUPA</Text>

                    </Pressable>
                </View>
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
        backgroundColor: '#EEE7DE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        fontWeight: 'bold',
        color: '#EA867F',
        fontSize: 20,
        marginBottom: 15,
        marginTop: 40,

    },
    body:{
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#EEE7DE',
    },
    numPickerWrapper:{
        alignItems: 'flex-start',
    },
    label:{
        fontWeight: 'bold',
        color: '#EA867F',
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
        backgroundColor: '#EA867F',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#EEE7DE',
        borderWidth: 5,
        marginTop: 40,

    },
    buttonText:{
        fontSize: 30,
        fontWeight: "bold",
        color: '#EEE7DE'
    }
})