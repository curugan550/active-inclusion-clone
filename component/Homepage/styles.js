import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    
    mainContainer: {
        width: '100%',
        height: '45%',
      },
    
      titles: {
        marginTop: '25%',
        width: '100%',
        paddingLeft: '10%'
      },
    
      title: {
        fontSize: 20,
        fontWeight: '500%',
        color: 'white',
      },
    
      image: {
        width:'100%',
        height: '100%',
        resizeMode:'cover',
        position: 'absolute',
      },
      buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 5,
      }
});

export default styles;