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
       
        onSkip={()=> navigation.navigate("LoginScreen")}
        onDone={()=> navigation.navigate("LoginScreen")}
        pages={[
            {
            backgroundColor: '#95b3de',
            image: <Image source={require('../assets/onBoardTwo.png')} />,
            title: 'Hygenic Environment',
            subtitle: 'We help to keep the society clean and hygine',
            },
            {
            backgroundColor: '#ffde82',
            image: <Image source={require('../assets/onBoardOne.png')} />,
            title: 'Clean City',
            subtitle: 'Jatayu helps to keep the city clean',
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