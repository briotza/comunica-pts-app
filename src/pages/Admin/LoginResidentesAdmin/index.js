import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginResidentesAdmin() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.abrirText}>Residentes</Text>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('CadastrosAdmin')}>
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.containerForm}>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>RESIDENTE 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>RESIDENTE 2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>RESIDENTE 3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>RESIDENTE 4</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.menuButtons}
                        onPress={() => navigation.navigate('CadastrosAdmin')}>
                        <Text style={styles.menuText}>RESIDENTE 5</Text>
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
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
