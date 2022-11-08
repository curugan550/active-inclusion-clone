import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style= {styles.logo} source ={require('../../assets/images/AI-logo.png')} />
            <Image style= {styles.UR} source ={require('../../assets/images/UR-logo.png')} />
        </View>
    );
};

export default Header;