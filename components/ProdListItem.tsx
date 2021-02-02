import { StyleSheet, Text, View, Image, Pressable, Modal, ScrollView, Animated } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Header, ListItem, Badge, Avatar } from 'react-native-elements';
import moment from 'moment';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {Prod} from '../Model';
import ProdInfo from './ProdInfo';

export default function ProdListItem(props: {item: Prod, key:number, deleteProd: (prod: Prod) => void}) {

   const [ timeLeft, setTimeLeft] = useState<string>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const dayInMilliseconds = 1000 * 60 * 60 * 24;
        let  expDate : string = moment(props.item.opened).add(props.item.expiresIn, 'months').format("YYYYMMDD")
        const timeToExpire = moment(expDate, 'YYYYMMDD').fromNow();
        setTimeLeft(timeToExpire)
        setInterval(function() {
                setTimeLeft(timeToExpire)
        }, 1000 );
    }, [timeLeft])

    const openDate : string = moment(props.item.opened).format("DD/MM/YY")
    const expDate : string= moment(props.item.opened).add(props.item.expiresIn, 'months').format("DD/MM/YY")
    const timer : number = 2629743 * props.item.expiresIn;

const closeModal : () => void = () => {
    setIsModalOpen(false)
}
  function openModal() {
      setIsModalOpen(true)
  }
    return (
        <Pressable
            onPress={() => openModal()}
        >
        <ListItem
            containerStyle={{backgroundColor: '#edc7c2', marginTop: 10, marginRight: 10, marginLeft: 10, borderRadius: 10, justifyContent: 'space-between', alignItems: "center"}}
        >
            <View style={styles.counterContainer}>

                <CountdownCircleTimer
                    isPlaying
                    duration={30}
                    colors={[
                        ['#004777', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                        ['#000000', 0.1],
                    ]}

                    trailColor={"#ffffff"}
                    size={100}
                    onComplete={() => {
                        console.log('ON_COMPLETE BEFORE RETURN')
                        return [false, 0]
                    }}
                >
                    <View style={styles.circle} >
                        <Image style={{height: 50, width: 50}} source={require('../assets/cosmetics.png')}/>
                    </View>
                </CountdownCircleTimer>
                <Badge value={timeLeft}
                       badgeStyle={{ padding: 10, marginTop: 3, backgroundColor: '#EA867F'}}
                />
            </View>
            {/*<View style={styles.circle} >*/}
            {/*    <Image style={{height: 50, width: 50}} source={require('../assets/cosmetics.png')}/>*/}
            {/*</View>*/}
            {/*<Avatar rounded source={{ uri: ava }} />*/}
            <ListItem.Content style={{marginLeft: 10}}>
                <ListItem.Title style={{color: '#3d7383', fontWeight: 'bold', marginTop:5}}>
                    {props.item.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{color: '#EA867F'}}>
                    <Text style={{fontWeight: "bold"}}>Type:  </Text> {props.item.type}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{color: '#EA867F'}}>
                    <Text style={{fontWeight: "bold"}}>From: </Text> {openDate}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{color: '#EA867F'}}>
                   <Text style={{fontWeight: "bold"}}>To : </Text>  {expDate}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{color: '#EA867F'}}>
                    {/*Expires: {expDate}*/}
                </ListItem.Subtitle>
            </ListItem.Content>
            {/*<Badge value="99+" status="error" />*/}

            {/*<ListItem.Chevron color="black"></ListItem.Chevron>*/}
            <ProdInfo item={props.item} open={isModalOpen} closeModal={closeModal} deleteProd={props.deleteProd}/>
        </ListItem>
        </Pressable>

    )
}

const styles = StyleSheet.create({

    circle:{
        height: 80,
        width: 80,
        backgroundColor: '#3D7383',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

    counterContainer: {
        height: 120
    },
    remainingTime: {
        fontSize: 46,
    },
})