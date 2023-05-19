import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
    },
    icon:{
        alignSelf:'center',
        width:140,
        height:47,
        marginTop:35
    },
    fundo:{
        backgroundColor:'#0d0d0d',
    },
    criadas:{
        fontWeight:'bold',
        color:'#4da8de'
    },
    concluidas:{
        fontWeight:'bold',
        color:'#8284fb'
    },
    number:{
        borderRadius:20,
        border:'none',
        backgroundColor:'#333333',
        width:23,
        height:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff',
        
    },
    nav:{
        flex:1,
        flexDirection:'row',
        marginTop:27,
        justifyContent:'space-between',
        marginBottom:-60
    },
    itens:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:25,
    },
    










    input: {
        flex: 1,/*ocupar todo o espaço */
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        border:'1px solid #0d0d0d'
    },
    buttonImage: {
        alignSelf:'center',
        width:20,
        height:20,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#1f709f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        flexDirection: 'row',
        marginTop: 0, 
        marginBottom: -50,
        padding:24
    },
    emptyImage:{
        alignSelf:'center',
        width:60,
        height:60,
        marginTop:45
        },
    listEmptyText: {
        color: '#7b7b7b',
        fontSize: 14,
        textAlign: 'center',
        fontWeight:'bold',
        marginTop:10
    },
    text2:{
        color:'#7b7b7b',
        textAlign:'center'
    },
    line:{
        border:'1px solid #262626',
        marginTop:50,
        margin:25
    }
  });