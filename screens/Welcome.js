// import React from 'react';
// import {View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, Button, ScrollView} from 'react-native'
// import styles from '../styles/Home.module'
// // import {NavigationContainer} from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// const WelcomeScreen = ({navigation}) => {
//     return(
//         <ScrollView>
//         <SafeAreaView>
//         <ImageBackground 
//             source={require('../assets/Home.png')}
//             style={{width:"100%",height:"100%"}}
//         >
//                 <View>
//                     <Text style={{color:"white", fontSize:30, width:"70%", marginTop:100, marginLeft: 20}}>Learn English With New Way</Text>
//                 </View>
//                 <View style={{padding:15,width:"70%", backgroundColor:"white", borderRadius:10, borderColor:"green", height:100, marginLeft:20}}>
//                     <Text style={{fontSize:14, color:"#db7d76",fontWeight:'bold'}}>Lewis Bot - Hold the Mic to speak</Text>
//                     <Text style={{fontSize:14,marginTop:5, color:"#db7d76",fontWeight:'bold'}}>Lewis Bot - The Best way to learn English</Text>
//                 </View>

//                 <View style={{backgroundColor:"#fae5e3", height:300, width:"90%", borderRadius:15, marginTop:30, marginLeft:18, paddingLeft:15, paddingRight:15}}>
//                     <Text style={{textAlign:"center", fontWeight:'bold', color:"#fc5242", marginTop:20, fontSize:20}}>List Of Instruction</Text>
//                     <Text>1. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</Text>
//                     <Text style={{marginTop:20}}>2. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</Text>
//                     <Text style={{marginTop:20}}>2. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</Text>
//                 </View>

//                 <View style={{ alignItems:"center", marginTop:10}}>
//                 </View>

//         </ImageBackground>
//         </SafeAreaView>
//         </ScrollView>
//     );
// }


// export default WelcomeScreen;





import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Voice from '@react-native-community/voice';

const WelcomeScreen = () => {

  const [result, setResult] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, [])

  const onSpeechStartHandler = (e) => {
    console.log("start handler==>>>", e)
  }
  const onSpeechEndHandler = (e) => {
    setLoading(false)
    console.log("stop handler", e)
  }

  const onSpeechResultsHandler = (e) => {
    let text = e.value[0]
    setResult(text)
    console.log("speech result handler", e)
  }

  const startRecording = async () => {
    setLoading(true)
    try {
      await Voice.start('en-Us')
    } catch (error) {
      console.log("error raised", error)
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop()
    } catch (error) {
      console.log("error raised", error)
    }
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headingText}>Speech Recoginition</Text>
        <View style={styles.textInputStyle}>
          <TextInput
            value={result}
            placeholder="your text"
            style={{ flex: 1 }}
            onChangeText={text => setResult(text)}
          />
          {isLoading ? <ActivityIndicator size="large" color="red" />

            :
            
            <TouchableOpacity
              onPress={startRecording}
            >
              <Image
                source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png' }}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>}
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 24,
            backgroundColor: 'red',
            padding: 8,
            borderRadius: 4
          }}
          onPress={stopRecording}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Stop</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 48,
    borderRadius: 20,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  }
});

export default WelcomeScreen;

