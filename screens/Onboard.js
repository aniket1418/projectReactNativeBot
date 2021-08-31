import React from 'react';
import { StyleSheet,  Image, } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = () => (
//     <Button 
//         title="skipButton"
//     />
// )

const OnBoardingScreen = ({navigation}) => {
    return(
        <Onboarding
       
        onSkip={()=> navigation.navigate("WelcomeScreen")}
        onDone={()=> navigation.navigate("HomeScreen")}
        pages={[
            {
            backgroundColor: '#95b3de',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'English Learning',
            subtitle: 'We help to keep the society to learn english and make brighter',
            },
            {
            backgroundColor: '#ffde82',
            image: <Image source={require('../assets/onboarding-img2.png')} />,
            title: 'Speech to Text',
            subtitle: 'Lewis Bot Helps to learn English Faster',
            }
        ]}
/>
    )
}

export default OnBoardingScreen;

const styles  = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
})