import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop:5,
        margin:25,
        border:'1px solid #363636'
    },
    name:{
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
        width:30,
    },
    buttonImage: {
        alignSelf:'center',
        width:20,
        height:20,
        marginLeft:7
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#262626',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radio:{
        height:17,
        width:17,
        borderRadius:100,
        backgroundColor:'#262626',
        border:'2px solid #4da8de',
        marginLeft:12
    },


    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },
})