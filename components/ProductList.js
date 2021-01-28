import { StyleSheet, Text, View, Image, Pressable, Modal, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Header, ListItem, Badge, Avatar } from 'react-native-elements';


export default function ProductList({items}) {
    return (
        <ScrollView >
            {
                items.map((item, index) => {
                    return (
                        <ListItem
                            friction={90} //
                            tension={100} // These props are passed to the parent component (here TouchableScale)
                            activeScale={0.95} //
                            containerStyle={{backgroundColor: 'white'}}
                        >
                            <View style={styles.circle} >
                                <Image style={{height: 50, width: 50}} source={require('../assets/cosmetics.png')}/>
                            </View>
                            {/*<Avatar rounded source={{ uri: ava }} />*/}
                            <ListItem.Content>
                                <ListItem.Title style={{color: '#fff', fontWeight: 'bold'}}>
                                    Chris Jackson
                                </ListItem.Title>
                                <ListItem.Subtitle style={{black: 'white'}}>
                                    Vice Chairman
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color="black"/>
                        </ListItem>
                    )
                })
            }
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    circle:{
        height: 100,
        width: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
})