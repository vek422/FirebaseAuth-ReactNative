import {View,StyleSheet,Text,SafeAreaView,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import React,{ useState } from 'react';
import ProgressLoader from 'rn-progress-loader';
import { auth } from '../firebase';

const ForgotPass = ()=>{

    const [email,setEmail] =useState();
    const [visible,setVisible]= useState();
    const [error,setError] = useState();    
    const [success,setsuccess]=useState();

    const handleReset = ()=>{
        setError(null);
        setVisible(true);
        setsuccess('');
        auth.sendPasswordResetEmail(email)
        .then(()=>{
            setsuccess('Password Reset Link is Sent to Your Email !');
            setVisible(false)
        })
        .catch((error)=>{
            setError('Enter A Valid Email Address');
            setVisible(false);
        })
    }


    return(
        <SafeAreaView style={styles .container}>
            <StatusBar style={styles.statusBar} />
            <View style={styles.textContainer}>
                <Text style={styles.heading}>
                    Recover Password
                </Text>
                <Text style={styles.text}>
                    Dont worry happens to the best of us.
                </Text>
            </View>
            <View style={styles.emailContainer}>
                <Text style={styles.emailText}>
                Enter You Email Address
                </Text>
                <TextInput
                autoCapitalize='none'
                 style={styles.email}
                 placeholder='Email Address'
                 value={email}
                 onChangeText={(email)=>setEmail(email)}
                 />
            </View>
            <View style={styles.errorContainer}>
                <Text style={[error?styles.errorText:"",success?styles.success:'']}>
                    {error?error:success?success:''}
                </Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                 onPress={handleReset}
                 style={styles.button}
                 >
                <Text style={styles.buttonText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
            <View>
            <ProgressLoader
                visible={visible}
                isModal={true} isHUD={true}
                hudColor={"#000000"}
                color={"#FFFFFF"} />
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFDE4',
        height:'100%',
        flex:1,
        flexDirection:'column',
        width:'100%',
        alignItems:'center'
        
        

    },
    statusBar:{
        backgroundColor:'#FFFDE4'
    },
    textContainer:{
        marginTop:20,
        marginHorizontal:20,
        flex:1,
        flexDirection:'column',
        maxHeight:'30%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    heading:{
        fontSize:35,
        fontWeight:'bold',
        color:'#003153',
    },
    text:{
        fontSize:20,
        paddingHorizontal:20,
        color:'#486B84'
    },
    emailContainer:{
        marginHorizontal:20,
        width:'100%',
    },
    emailText:{
        marginTop:20,
        fontSize:20,
        marginHorizontal:40,
        fontWeight:'bold',
        color:'#53000F',
    },
    email:{
        marginTop:20,
        marginHorizontal:40,
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
        borderColor:'#003153',
        borderWidth:2,
        width:'100%',
        height:50,
        borderRadius:10,
        marginTop:20,
        color:'white',
        alignItems:"center"
    },
    buttonText:{
        color:"#53000F",
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:20,
        paddingVertical:10
        
    },
    errorContainer:{
        marginTop:20,
        
    },
    errorText:{
        color:'#ce2029',
        fontSize:12,
        
    },
    success:{
        color:'#486B84',
        fontSize:15,
        
    }
});

export default ForgotPass;