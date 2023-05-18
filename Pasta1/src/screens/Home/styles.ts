import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0d',
    },
    icon:{
        alignSelf:'center',
        width:140,
        height:48,
        marginTop:35
    },
    fundo:{
        backgroundColor:'#1a1a1a',
        zIndex:1,
        height:'100%'
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
        width:20,
        height:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff',
        paddingLeft:6,
        paddingRight:8,
    },
    nav:{
        flex:1,
        flexDirection:'row',
        marginTop:27,
        justifyContent:'space-between',
    },
    itens:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:25,
    },
    










    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
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
        width: '100%',
        flexDirection: 'row',
        marginTop: 35, 
        marginBottom: -50,
        zIndex:2,
        padding:24
    },
    emptyImage:{
        alignSelf:'center',
        width:60,
        height:60,
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
    }
  });