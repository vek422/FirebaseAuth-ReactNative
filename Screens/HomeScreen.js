import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';


const HomeScreen = () => {
  const navigation= useNavigation();
  const handleSignout = ()=>{
    auth.signOut()
    .then(()=>{
      navigation.replace("Login");
    }).catch((error)=>{
      console.log(error.message)
    })
  }
  return (
    <View style={styles.container}>
      <Text styles={styles.Email}>{auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',

  },
  button : {
        backgroundColor:'#0782f9',
        width: '60%',
        padding:15,
        borderRadius:10
    },
    Email : {
        color: 'black',
        fontWeight:'700',
        fontSize:16,
        textAlign:'center'
    },
    buttonText:{
      textAlign:'center',
      color:'white',
    }


})
export default HomeScreen