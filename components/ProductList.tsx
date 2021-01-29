import { StyleSheet, Text, View, Image, Pressable, Modal, ScrollView, Animated } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Header, ListItem, Badge, Avatar } from 'react-native-elements';
import moment from 'moment';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {Prod} from '../Model';
import ProdListItem from './ProdListItem';
import ProdInfo from './ProdInfo';

export default function ProductList(props: {prods: Prod[], deleteProd: (prod: Prod) => void}) {


    const [openProdInfo, setOpenProdInfo] = useState(false);


    return (
        <ScrollView >
            {
                props.prods.map((item, index) => {
                 return <ProdListItem  item={item} key={index} deleteProd={props.deleteProd}/>
                })
            }

        </ScrollView>

    )
}

const styles = StyleSheet.create({

    circle:{
        height: 80,
        width: 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

    counterContainer: {
        height: 100
    },
    remainingTime: {
        fontSize: 46,
    },
})