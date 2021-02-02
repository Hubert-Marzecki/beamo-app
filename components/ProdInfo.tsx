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
import moment from 'moment';

export default function ProdInfo(props: {item: Prod, open: boolean, closeModal: () => void,  deleteProd: (prod: Prod) => void}) {


    const [ timeLeft, setTimeLeft] = useState<string>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const expDate : string = moment(props.item.opened).add(props.item.expiresIn, 'months').format("YYYYMMDD")
    const openDate : string = moment(props.item.opened).format("DD/MM/YY");
    const expDateToDisplay : string = moment(props.item.opened).add(props.item.expiresIn, 'months').format("DD/MM/YY")

    useEffect(() => {
        const dayInMilliseconds : number = 1000 * 60 * 60 * 24;
        const timeToExpire : string = moment(expDate, 'YYYYMMDD').fromNow();
        setTimeLeft(timeToExpire)
        setInterval(function() : void {
            setTimeLeft(timeToExpire)
        }, 1000 );
    }, [timeLeft])


    return (
        <Modal
            visible={props.open}
            animationType="slide"
            transparent={false}
            onRequestClose={props.closeModal}
        >

            <KeyboardAvoidingView
                // @ts-ignore
                resetScrollToCoords={{ x: 0, y: 0 }}
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


                    <View style={styles.circle} >
                        <Image style={{height: 100, width: 100}} source={require('../assets/cosmetics.png')}/>
                    </View>
                    <Text style={styles.header}>{props.item.name}</Text>
                    <Text style={styles.label}> Opened: {openDate} </Text>
                    <Text style={styles.label}> Expire date:  {expDateToDisplay} </Text>
                    <Text style={styles.labelBigger}> Expires {timeLeft} </Text>

                    <View style={styles.buttonWrapper}>
                        <Pressable onPress={() => {props.deleteProd(props.item), console.log(props.item)}}>
                            <Text style={styles.buttonText}>DELETE</Text>
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
        color: '#3d7383',
        fontSize: 20,
        marginBottom: 55,
        marginTop: 15,
        textAlign: 'center',
        maxWidth: 300,

    },
    body:{
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#EEE7DE',
    },

    circle:{
        height: 100,
        width: 100,
        backgroundColor: '#3d7383',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    numPickerWrapper:{
        alignItems: 'flex-start',
    },
    label:{
        fontWeight: 'bold',
        color: '#EDC7C2',
        fontSize: 15,
        paddingLeft: 12,
        textAlign: 'center',
    },
    labelBigger:{
        fontWeight: 'bold',
        color: '#EA867F',
        fontSize: 20,
        paddingLeft: 12,
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center',
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
        backgroundColor: "#EDC7C2",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#EA867F',
        borderWidth: 5,
        marginTop: 20,
    },
    buttonText:{
        fontSize: 30,
        fontWeight: "bold",
        color: '#EEE7DE'
    }
})