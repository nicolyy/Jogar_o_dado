import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native'; 

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
    
    <View style={styles.box}>
    <Text style={styles.text}>JOGO DO DADO</Text>
    <Text style={styles.subtitulo}>Clique no dado para o número ser sorteado</Text>

      {/* Exibir a imagem usando o componente Image */}
    <TouchableOpacity onPress={changeImage}>
      <Image source={enderecoImage} style={styles.image}></Image>
      <StatusBar style="auto" />
    </TouchableOpacity>
    <Text style={styles.rodape}>By Nicoly Oliveira :)</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
 
  image: {
    width: 200, 
    height: 200, 
    marginTop: 20,
  },

  text: {
    fontSize: '32px',
    margin: '0 0 2% 0',
    fontFamily: 'Arial',
    color: '#4B0082',
    fontWeight: 'bold',
    
  },

  subtitulo:{
    fontSize: '22px',
    fontFamily: 'Arial',
    color: '#4B0082',
  },

  rodape: {
    marginTop: 70,
    color: '#4B0082',
  },

  box: {
    width: 600, 
    height: 600, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Sombra para Android
    elevation: 5,
  },
});