import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    container: {
     position: 'absolute',
     top: 50,
     zIndex:100,
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: '50%',
     paddingHorizontal: 20,
     backgroundColor: 'white'
    },

   logo: {
    width: 20,
    height: 10,
    resizeMode: 'contain'
   },

   UR: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
   },
})