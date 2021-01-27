import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import { AppLoading, Font } from 'expo';
import AddCosmeticsModal from './components/AddCosmeticsModal'
export default function App() {

  const [state, setState] = useState({
    isModalOpen: false,
    cosmetics: [{
      name: String,
      type: String,
      Opended: String,
      ExpiresIn: String,
      Icon: String,
      Photo: String,
    }]
  })

function openModal() {
  setState(s => {
    return{ ...s, isModalOpen: true}
  })
}

const closeModal = function (){
  setState(s => {
    return{ ...s, isModalOpen: false}
  })
}

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
      </View>
      <View style={styles.body}>
        <Image style={styles.img} source={require('./assets/cosmetics.png')} />
        <Text style={styles.bodyText}>ADD YOUR COSMETICS</Text>
      </View>

      <View style={styles.footer}>
        <Pressable onPress={openModal}>
          <Text>I'm pressable!</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />

    <AddCosmeticsModal open={state.isModalOpen} closeModal={closeModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    flex: 1,
    backgroundColor: '#3D7383',
    alignSelf: 'stretch'
  },
  body:{
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#EEE7DE',
  },
  bodyText:{
    fontWeight: 'bold',
    color: '#3D7383',
    fontSize: 20,
  },
  footer:{
    flex: 1,
    backgroundColor: '#3D7383',
    alignSelf: 'stretch'
  }
});
