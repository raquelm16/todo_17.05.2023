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
        borderWidth:1,
        borderColor:'#363636'
    },
    name:{
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
        width:30,
        margin:5,
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
        height:18,
        width:18,
        borderRadius:100,
        backgroundColor:'#262626',
        borderWidth:2,
        borderColor:'#4da8de',
        marginLeft:12,
        fillColor:'#8284fb'
    },
})