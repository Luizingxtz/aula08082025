import {StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ecf0f1',
  },
  paragraph:{
    margin: 24,
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
  },
  paragraph2:{
    margin: 18,
    color:'#0f0',
    textAlign:'right',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic',
  },
  caixa:{
    width:200,
    height:200,
    borderWidth:2,
    borderRadius:20,
    alignSelf:'center',
    borderColor:'#f00',
    paddingLeft:20,
    paddingTop:50
  },
  caixa2:{
    width:250,
    height:200,
    borderRadius:20,
    backgroundColor:'#0ff',
    marginLeft:20,
    marginTop:20,
  }
})

export default mascara;

