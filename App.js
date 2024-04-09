import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native'; // Importe o componente Image

// Importar as imagens
import imagem01 from './assets/1.png';
import imagem02 from './assets/2.png';
import imagem03 from './assets/3.png';
import imagem04 from './assets/4.png';
import imagem05 from './assets/5.png';
import imagem06 from './assets/6.png';



import { TouchableOpacity } from 'react-native-web';

export default function App() {
  // Constante para realizar alterações, set alterar, get obter
  const [enderecoImage, setEnderecoImagem] = useState(imagem01);

  //criando a função
  const changeImage = () => {
    //criando um array com as imagens
    const images = [imagem01, imagem02, imagem03, imagem04, imagem05, imagem06];
    //criando um numero aleatorio
    const numeroAleatorio = Math.floor(Math.random() * images.length);
    //alterando a imagem
    setEnderecoImagem(images[numeroAleatorio]);
    
  }
  return (
    <View style={styles.container}>
      {/* Exibir a imagem usando o componente Image */}
    <TouchableOpacity onPress={changeImage}>
      <Image source={enderecoImage} style={styles.image}></Image>
      <StatusBar style="auto" />
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Adicione um estilo para a imagem, se necessário
  image: {
    width: 200, // Ajuste o tamanho conforme necessário
    height: 200, // Ajuste o tamanho conforme necessário
  },
});