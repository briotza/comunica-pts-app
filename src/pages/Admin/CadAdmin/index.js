import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadAdmin() {
    const navigation = useNavigation();
    const [departamentoSelecionado, setDepartamentoSelecionado] = useState('');
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
    const departamentos = ['Selecione um departamento', 'TI', 'DOP', 'DAF'];
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


    const selecionarDepartamento = (departamento) => {
        setDepartamentoSelecionado(departamento);
        setMostrarOpcoes(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.abrirText}>Admin 1</Text>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginAdmin')}>
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerDados}>
                    <Text style={styles.formulario}>Categoria: </Text>

                    <Text style={styles.formularioR}>ADMIN</Text>

                </View>
                <View style={styles.containerDados}>
                    <Text style={styles.formulario}>Empresa: </Text>
                    <Text style={styles.formularioR}>EMPRESA</Text>
                </View>
                <View style={styles.containerDados}>
                    <Text style={styles.formulario}>Nome: </Text>
                    <Text style={styles.formularioR}>NOME</Text>
                </View>
                <View style={styles.containerDados}>
                    <Text style={styles.formulario}>Sobrenome: </Text>
                    <Text style={styles.formularioR}>SOBRENOME</Text>
                </View>
                <View style={styles.containerDados}>
                    <Text style={styles.formulario}>Login: </Text>
                    <Text style={styles.formularioR}>LOGIN</Text>
                </View>
                <View style={styles.containerDados}>
                    <Text style={styles.formulario}>Senha: </Text>
                    <Text style={styles.formularioR}>SENHA</Text>
                </View>
            </View>

            <View style={styles.containerButton}>
                <Text style={styles.formulario}>Foto</Text>

                    <Image 
                        source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/user.jpg')}
                        style={styles.userIcon}
                        resizeMode='contain'
                    />
             
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons} onPress={() => navigation.navigate('EditAdmin')}>
                        <Text style={styles.menuText}>EDITAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                        <Text style={styles.menuText}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        marginTop: 10,
        paddingHorizontal: 16,
    },
    containerForm: {
        paddingTop: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    containerDados: {
        flexDirection: 'row',
    },
    containerButton: {
        alignItems: 'center',
        paddingTop: 15,
    },
    abrirText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10,
    },
    backButton: {
        position: 'absolute',
        right: 16,
        marginTop: 20,
    },
    backText: {
        color: '#5DB075',
        fontSize: 18,
    },
    input: {
        height: 45,
        width: '70%',
        borderColor: '#E8E8E8',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    menuButton:{
        backgroundColor: '#5DB075',
        width: 250,
        height: 50,
        paddingVertical: 8,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuButtons: {
        backgroundColor: '#5DB075',
        width: 250,
        height: 50,
        paddingVertical: 8,
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    formulario: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
    },
    formularioR:{
        marginTop: 10,
        fontSize: 18,
    },
    pickerContainer: {
        height: 48,
        width: 220,
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    pickerText: {
        color: 'black',
    },
    buttonAnexo: { //botão Anexo
        width: 80,
        height: 40,
        paddingVertical: 8,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    opcoes: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        minWidth: 240,
        backgroundColor: '#fff',
    },
    opcao: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    userIcon: {
        position: 'absolute',
        maxWidth: '15%',
        maxHeight: '15%',
        borderRadius: 100,
        marginLeft: 50,
        marginTop: 60,
        borderWidth: 4,
        borderColor: 'white'
    },
});
