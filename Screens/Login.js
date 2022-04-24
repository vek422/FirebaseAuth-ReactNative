import { StyleSheet,Text,View,ImageBackground,KeyboardAvoidingView ,TextInput} from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/core';
import ProgressLoader from 'rn-progress-loader';


const Login = ()=>{
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const [errorText,setErrorText] = useState();
    const [visible,setVisible]= useState();
    const navigation= useNavigation();

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Home");
            }
        })
        return unsubscribe
    })


    if(errorText){
        if(errorText === 'wrong-password')
        {
            setErrorText('Oops! You have Entered Wrong Password')
        }
    }

    const handleLogin = ()=>{
        setVisible(true);
        setErrorText(null);
        auth.signInWithEmailAndPassword(email?email.trim():email,pass)
        .then((userCredential)=>{
            const user = userCredential.user;
            setVisible(false)
        })
        .catch((error)=>{
            setErrorText(error.code.slice(5,error.length));
            setVisible(false);
        })
    }
    
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.textContainer} >
            <Text style={styles.heading}>Hello !{'\n'}Welcome Back</Text>
            </View>
            <View style={styles.textFields} >
                <TextInput 
                placeholder="Email Address"
                style={[styles.email,errorText?styles.erroremail:""]}
                autoCapitalize="none"
                onChangeText={email=> {email=setEmail(email)}}
                value={email}
                />
                <TextInput 
                style={styles.password}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={(pass)=>setPass(pass)}
                secureTextEntry
                value={pass}
                />
            </View>
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    {errorText?errorText:""}
                </Text>
                
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                 onPress={handleLogin}
                 style={styles.button}
                 >
                <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.bottomText}>
                    <Text onPress={()=>{navigation.navigate('ForgotPass')}} style={styles.fpass}>Forgot Your Password ?</Text>
                    <Text onPress={()=>{navigation.replace('Signup')}} style={styles.sup}>Login</Text>
                </View>
            <View>
            <ProgressLoader
                visible={visible}
                isModal={true} isHUD={true}
                hudColor={"#000000"}
                color={"#FFFFFF"} />
            </View>

        </KeyboardAvoidingView>

    )

}   

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#FFFDE4',
        flex:1,
        justifyContent:"flex-start",
        alignItems:'center',
    },
    heading:{
        fontSize:35,
        fontWeight:'bold',
        color:'#003153',
    },
    textContainer:{
        marginTop:70,
        lineHeight:1.5,
        letterSpacing:1.5,
        width:'80%'
    },
    textFields:{
        width:'80%',
        marginTop:50,
    },
    email:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderColor:'#C0BFB2',
        borderWidth:2,
        borderRadius:10,
        marginTop:20

    },
    erroremail:{
        borderColor:'#ce2029'
    },
    password:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderColor:'#C0BFB2',
        borderWidth:2,
        borderRadius:10,
        marginTop:20,
    },
    buttons:{
        width:'80%'
    },
    button:{
        backgroundColor:'#003153',
        width:'100%',
        height:50,
        borderRadius:10,
        marginTop:20,
        color:'white',
        alignItems:"center"
    },
    buttonText:{
        color:"#FFFEF4",
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:20,
        paddingVertical:10
        
    },
    bottomText:{
        marginTop:20,
        width:'90%',
        paddingHorizontal:20,
        flex:1,
        justifyContent:'space-between',
        marginLeft:0,
        flexDirection:'row'
    },
    fpass:{

    },
    sup:{
    },

    errorContainer:{
        marginTop:20,
        
    },
    errorText:{
        color:'#ce2029',
        fontSize:12,
        
    }
    
});

export default Login;
export {user};




//for resseting the pass
// const auth = getAuth();
// sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });