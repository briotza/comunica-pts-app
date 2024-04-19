import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import DocumentPicker from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';


export default function AbrirChamadoResidente() {
  const navigation = useNavigation();
  const [departamento, setDepart] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const pickDocument = async () => {


    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

      if (result.type === 'cancel') {
        console.log('Seleção de documento cancelada');
      } else {
        setSelectedDocument(result.name); // Armazenar o nome do documento selecionado
        console.log(result.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.abrirText}>Abrir Chamado</Text>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MenuResidente')}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.containerForm}>
        <Text style={styles.form}>De: </Text>
        <Text style={styles.user}>Residente (Nome Sobrenome)</Text>
        <Text style={styles.form}>Para: </Text>

        <View style={styles.containerOptions}>
          <Text style={styles.radioText}>TI</Text>
          <Text style={styles.radioText}>Operações</Text>
          <Text style={styles.radioText}>Financeiro</Text>
        </View>

        <View style={styles.containerRadio}>
          {['TI', 'Operações', 'Financeiro'].map(depart => (
            <View key={depart} style={styles.departamento}>
              <TouchableOpacity style={styles.outter}
                onPress={() => setDepart(depart)}
              >
                {departamento === depart && <View style={styles.inner} />}
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={styles.formAssunto}>Assunto: </Text>
        <TextInput style={styles.assunto} />
        <TextInput
          placeholder="Descrição"
          placeholderTextColor="#BDBDBD"
          multiline={true}
          numberOfLines={4}
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonAnexo} onPress={pickDocument}>
          <Text style={styles.buttonText}>Anexo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { //container total
    flex: 1,
  },
  containerHeader: { //container cabeçalho
    marginTop: 10,
    
    paddingHorizontal: 16,
  },
  containerForm: { //segundo container (De, Para, Assunto, Departamento, Descrição, Anexo e Enviar)
    flex: 10,
    marginLeft: 30,

  },
  containerRadio: { //container absoluto para os botões radio
    position: 'absolute',
    paddingTop: 35,

  },
  containerOptions: { //container para opções (TI, Operações e Financeiro)
    position: 'absolute',
    marginTop: 41,
  },
  abrirText: { //titulo da página
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  backButton: { //botão voltar
    position: 'absolute',
    right: 16,
    marginTop: 20,
  },
  backText: { //texto 'Voltar'
    color: '#5DB075',
    fontSize: 18,
  },
  form: {  //textos De, Para e Assunto
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  assunto: { //input do assunto
    position: 'absolute',
    marginTop: 177,
    marginLeft: 78,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    width: 250,
  },
  input: { //campo Descrição
    marginTop: 15,
    backgroundColor: '#F6F6F6',
    height: 340,
    width: 330,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  buttonText: { //textos botões Anexo e Enviar
    color: '#FFFFFF',
    fontSize: 15,
  },
  buttonAnexo: { //botão Anexo
    backgroundColor: '#5DB075',
    width: 80,
    height: 40,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnviar: { //botão Enviar
    backgroundColor: '#5DB075',
    width: 330,
    height: 40,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: { //texto opções (TI, Operações, Financeiro)
    marginLeft: 60,
    fontSize: 18,
    marginTop: 15,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    borderEndWidth: 70,
  },
  user: { //nome do usuário e residente
    position: 'absolute',
    marginTop: 17,
    marginLeft: 30,
    fontSize: 17,
  },
  formAssunto: { //texto Assunto:
    marginTop: 100,
    fontWeight: 'bold',
    fontSize: 18,
  },
  outter: { //botão radio
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 190,
  },
  inner: { //seleção do botão
    width: 8,
    height: 8,
    backgroundColor: '#5DB075',
    borderRadius: 10
  },
  departamento: { //posição botões radio
    marginTop: 22
  }

});
