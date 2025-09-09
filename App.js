import {SafeAreaView, Text, View, Image} from 'react-native';
import mascara from './css/estilo';

export default function App(){
  return(
    <SafeAreaView style={mascara.container}>
        <Text style={mascara.paragraph}>
        Aula 5
        </Text>
        <View style={mascara.caixa}></View>
<Text style={mascara.paragraph2}>
        Suzano
        </Text>
        <View style={mascara.caixa2}></View>
    </SafeAreaView>
  )
}