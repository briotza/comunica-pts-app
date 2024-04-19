import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastrosAdmin() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.abrirText}>Cadastros</Text>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('MenuAdmin')}>
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.containerForm}>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>ADMIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>RESIDENTES</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>DTIC</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>DOP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>DAF</Text>
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
    containerBody: {
        paddingTop: 20,
        alignItems: 'center',
    },
    containerBusca: {
        flex: 9,
        paddingHorizontal: 30,
        paddingTop: 15
    },
    containerForm: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultado: {
        paddingBottom: 15,
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1,
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
        backgroundColor: '#F6F6F6',
        height: 48,
        width: 340,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 100,
        paddingLeft: 10,
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
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    textContainer: {
        marginLeft: 4,  // Ajuste de margem para alinhar corretamente com "Para:"
    },
    menuButtons: {
        backgroundColor: '#5DB075',
        width: 250,
        height: 50,
        paddingVertical: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
});
