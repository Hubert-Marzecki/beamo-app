import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, ScrollView } from 'react-native';
import { AppLoading, Font } from 'expo';
import AddCosmeticsModal from './components/AddCosmeticsModal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ListItem, Badge, Avatar } from 'react-native-elements';
import ProductList from  './components/ProductList';
import {Prod} from './Model';
import HeaderLogo from './components/HeaderLogo';

export default function App() : JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const  [newCosmetic, setNewCosmetic] = useState<Prod>({
    name: "",
    type: "",
    opened: {},
    expiresIn: 0,
    icon: "",
    photo: "",
    id: ""
  })

  const [prodList, setProdList] = useState<Array<Prod>>([])

useEffect(() => {
  console.log(prodList)
},[prodList]);


function openModal() : void {
 setIsModalOpen(true)
}
  const closeModal = function () : void{
    setIsModalOpen(false)
  }

  const  deleteProd = (prod:Prod) => {
    setProdList(s => {
    const newList = s.filter(item => item.name !== prod.name)
      return newList
    })
  }


  const addProductToList = (newProd: Prod) : void => {
          setProdList(s => {
          const list = s.concat(newProd)
          return list;
    }

)

    setIsModalOpen(false)
  }

  function displayProducts() : JSX.Element {
    if(prodList.length === 0) {
      return (
          <View style={styles.body}>
            <Image style={styles.img} source={require('./assets/logo.png')} />
            <Text style={styles.bodyText}> Add once - never forget!</Text>
          </View>
      )
      } else {
      return (
          <View style={styles.bodyList}>
            <ProductList prods={prodList} deleteProd={deleteProd}/>
          </View>
          )
      }
  }

  return (
      <SafeAreaProvider>
    <View style={styles.container}>
      <Header
          containerStyle={{
            backgroundColor: '#3d7383',
            flex:1
          }}
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={<HeaderLogo/>}
          // rightComponent={{ icon: 'search', color: '#fff' }}
      />

      {displayProducts()}


      <View style={styles.footer}>
        <Pressable onPress={openModal } style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
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
    backgroundColor: '#3d7383',
    alignSelf: 'stretch'
  },
  body:{
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: "#EEE7DE",
  },
  img:{

  },
  bodyList:{
    flex: 8,
    alignSelf: 'stretch',
    backgroundColor: "#EEE7DE",
  },
  bodyText:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 3
  },
  footer:{
    flex: 1,
    backgroundColor: '#3D7383',
    alignSelf: 'stretch',
      zIndex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  buttonWrapper:{
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    backgroundColor: "#EA867F",
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: -35,
    borderColor: 'white',
    borderWidth: 4
  },
  buttonText:{
    fontSize: 40,
    fontWeight: "bold",
    color: '#EEE7DE'
  }

});
