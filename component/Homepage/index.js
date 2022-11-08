import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const Homepage = (props) => {
    return (
      <View style = {styles.mainContainer}>

      <ImageBackground 
      source={require('../../assets/images/SL.jpg')} 
      style={styles.image} />
    
    <View style = {styles.titles}>
      <Text style = {styles.title}>Building an active and inclusive community</Text>
     </View>

     <View style={styles.buttonsContainer}>
     <StyledButton 
     type = "primary" 
     content="08 8122 6730"
     onPress ={() => {
        console.warn("Number was Pressed")
     }}/>

    <StyledButton 
     type = "secondary" 
     content="Contact"
     onPress ={() => {
        console.warn("Contact was Pressed")
     }}/>
     </View>


    </View>
    );
};

export default Homepage;