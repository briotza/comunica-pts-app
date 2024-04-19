import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as DocumentPicker from 'expo-document-picker';



export default function ChamadoDaf() {

    const navigation = useNavigation();
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
return(
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.abrirText}>Assunto do Chamado</Text>

            <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.navigate('MeusChamadosDaf')}>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.detalhes}>
                <View style={styles.infoContainer}>
                    <Text style={styles.topicos}>Para:</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.dado}>Departamento</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.topicos}>Situação:</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.dado}>Situação</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.containerBody}>
                <View style={styles.chatContainer}>
                    <Text style={styles.topicos}>Você</Text>
                    <Text style={styles.data}>dd/mm/aaaa</Text>
                    <Text style={styles.descricao}>Descrição</Text>
                </View>
                <View style={styles.chatContainer}>
                    <Text style={styles.topicos}>Departamento</Text>
                    <Text style={styles.data}>dd/mm/aaaa</Text>
                    <Text style={styles.descricao}>Descrição</Text>
                </View>
                <View style={styles.chatContainer}>
                    <Text style={styles.topicos}>Você</Text>
                    <Text style={styles.data}>dd/mm/aaaa</Text>
                    <Text style={styles.descricao}>Descrição</Text>
                </View>
               
                <TextInput
                    placeholder="Resposta"
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
    </View>
)}
const styles= StyleSheet.create({
    container:{
        flex: 1
    },
    containerHeader:{
        marginTop: 10,
        flex: 1,
        paddingHorizontal: 16,
    },
    containerBody:{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    textContainer: {
        marginLeft: 4, 
    },
    detalhes:{
        margintop: 30
    },
    abrirText:{
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10
    },
    backButton:{
        position: 'absolute',
        right: 16,
        marginTop: 20
    },
    backText:{
        color: '#5DB075',
        fontSize: 18
    },
    topicos: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        
    },
    data: {
        position: 'absolute',
        right: 0,
        color: '#BDBDBD',
    },
    dado: {
        fontSize: 14,
    },
    chatContainer:{
        marginTop: 20
    },
    input:{
        marginTop: 50,
        backgroundColor: '#F6F6F6',
        height: 200,
        width: '100%',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
    },
    buttonAnexo:{ //botão Anexo
        backgroundColor:'#5DB075',
        width: 80,
        height: 40,
        paddingVertical: 8,
        borderRadius: 30,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText:{ //textos botões Anexo e Enviar
        color: '#FFFFFF',
        fontSize: 15,
      },
      buttonEnviar:{
        backgroundColor:'#5DB075',
        width: '100%',
        height: 40,
        paddingVertical: 8,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
      }
})