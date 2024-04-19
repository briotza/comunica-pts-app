import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function SignIn() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/comunicaicon.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
      <View style={styles.containerForm}>

        <TextInput
          placeholder="Login"
          placeholderTextColor="#BDBDBD"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#BDBDBD"
          style={styles.input}
          secureTextEntry={true} //esconder senha
        />

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('MenuAdmin')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Para cadastrar seu usuário ou redefinir senha entre em contato com:</Text>
        <Text style={styles.email}>dti@empts.com.br</Text>
        <Image
          source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/logopts.png')}
          style={styles.ptsLogo}
          resizeMode='contain'
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //pega a tela inteira
    backgroundColor: "#FFFFFF", //cor de fundo
    alignItems: 'center',
  },
  containerHeader: {
    maxHeight: '20%',
    marginTop: 90,

  },
  containerForm: {
    flex: 1,
    maxWidth: '80%',
    marginTop: 30,
    paddingStart: '5%',
    paddingEnd: '5%',
    alignItems: 'center'
  },
  logo: {
    maxWidth: '63%',
    maxHeight: '63%'
  },
  input: {
    backgroundColor: '#F6F6F6',
    height: 48,
    width: 310,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 10
  },
  button: {
    backgroundColor: '#5DB075',
    width: 310,
    height: 50,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  text: {
    textAlign: 'center',
    marginTop: 60,
    color: '#5DB075'
  },
  email: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#5DB075'
  },
  ptsLogo: {
    maxHeight: '80%',
    maxWidth: '80%',
    marginTop: 40
  }
})