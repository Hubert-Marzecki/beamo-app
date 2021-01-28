import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, ScrollView } from 'react-native';
import { AppLoading, Font } from 'expo';
import AddCosmeticsModal from './components/AddCosmeticsModal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ListItem, Badge, Avatar } from 'react-native-elements';
import ProductList from  './components/ProductList'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const  [newCosmetic, setNewCosmetic] = useState({
    name: "",
    type: "",
    opened: {},
    expiresIn: "",
    icon: "",
    photo: "",
  })

  const [prodList, setProdList] = useState([])


function openModal() {
 setIsModalOpen(true)
}
  const closeModal = function (){
    setIsModalOpen(false)
  }

const updateNewProduct = (key, val) => {
  setNewCosmetic(s => ({...s,  [key]: val}))
  console.log(newCosmetic)
  }

  const addProductToList = (newProd) => {
setProdList(s =>{
      const list = s.concat(newProd)
return list;
    }
)
    console.log(newProd)
    setIsModalOpen(false)
  }

  function displayProducts() {
    if(prodList == []) {
      return (
          <View style={styles.body}>
            <Image style={styles.img} source={require('./assets/cosmetics.png')} />
            <Text style={styles.bodyText}>Add your cosmetics</Text>
          </View>
      )
      } else {
      return (
          <View style={styles.bodyList}>
            <ProductList items={prodList}/>
          </View>
          )
      }
  }

  return (
      <SafeAreaProvider>
    <View style={styles.container}>
      <Header
          containerStyle={{
            backgroundColor: '#4c69a5',
            flex:1
          }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
              }
          }}
          rightComponent={{ icon: 'search', color: '#fff' }}
      />

      {displayProducts()}

      <View style={styles.footer}>
        <View style={styles.buttonWrapper}>
        <Pressable onPress={openModal}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    <AddCosmeticsModal open={isModalOpen} closeModal={closeModal}  addProductToList={addProductToList}/>
    </View>
      </SafeAreaProvider>
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
    backgroundColor: '#4c69a5',
    alignSelf: 'stretch'
  },
  body:{
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#EEE7DE',
  },
  bodyList:{
    flex: 8,
    alignSelf: 'stretch',
    backgroundColor: '#EEE7DE',
  },
  bodyText:{
    fontWeight: 'bold',
    color: '#3D7383',
    fontSize: 20,
    marginTop: 3
  },
  footer:{
    flex: 1,
    backgroundColor: '#4c69a5',
    alignSelf: 'stretch',
      zIndex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  buttonWrapper:{
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    backgroundColor: "#aad7f8",
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: -35,
    borderColor: 'white',
    borderWidth: 5
  },
  buttonText:{
    fontSize: 40,
    fontWeight: "bold",
    color: '#EEE7DE'
  }

});
