import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View ,KeyboardAvoidingView} from 'react-native'
import React, {useState,useEffect} from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { auth } from '../firebase';

const LoginScreen = () => {

    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const navigation= useNavigation();
    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user){
                navigation.replace("Home");
            }
        })
        return unsubscribe
    },[ ])

    const handleSignup = ()=>{
        
        auth.createUserWithEmailAndPassword(email,pass).
        then(usercredentials=>{
            const user = usercredentials.user;
            console.log("Rgestered with ",user.email);
        }).catch((error)=>{
            console.log(error.message);
        })
    };

    const handleLogin = ()=>{
        auth.signInWithEmailAndPassword(email,pass).
        then(usercredentials=>{
            const user = usercredentials.user;
            console.log("Logged in with ",user.email);
        }).catch((error)=>{
            console.log(error.message);
        })
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <Text>LoginScreen</Text>
      <View style={styles.inputContainer} >
          <TextInput 
          placeholder='EMail' 
          value={email} 
          onChangeText={text =>setEmail(text)} 
          style={styles.input} />

          <TextInput 
          placeholder='PassWord' 
          value={pass} 
          onChangeText={text =>setPass(text)} 
          style={styles.input} 
          secureTextEntry/>
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
             onPress={handleLogin}
             style={[styles.button]}
          >
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={handleSignup}
             style={[styles.button,styles.buttonOutline]}
          >
              <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1
    },
    inputContainer:{
        width: '80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    },
    buttonContainer:{
        width: '60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40

    },
    button : {
        backgroundColor:'#0782f9',
        width: '100%',
        padding:15,
        borderRadius:10
    },
    buttonText : {
        color: 'white',
        fontWeight:'700',
        fontSize:16,
        textAlign:'center'
    },
    buttonOutline : {
        backgroundColor:'white',
        marginTop:10,
        borderColor:'#0782f9',
        borderWidth:1,
    },
    buttonOutlineText : {
        color: 'black',
        fontWeight:'700',
        fontSize:16,
        textAlign:'center'

    },
})