import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    modalViewParent: {
        // backgroundColor: 'red', 
        // color: 'red',
        
        // top: 200,
        // position: 'absolute',
        // height: Dimensions.get('window').height - 100
    },
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: '#000000AA'
    //   alignItems: "center",
    //   marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    commentBox: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      bottom: 0,
      position: 'absolute'
    },
  });