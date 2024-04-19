import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ResidentesDaf() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.abrirText}>Financeiro</Text>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MenuDaf')}>
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBody}>
                <TextInput
                    placeholder="Procurar"
                    placeholderTextColor="#BDBDBD"
                    style={styles.input}
                />
            </View>

            <ScrollView style={styles.containerBusca}>
                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.residente}
                onPress={() => navigation.navigate('BoletoAnoDaf')}>
                    <Text style={styles.residenteNome}>Residente</Text>
                </TouchableOpacity>

                
               
            </ScrollView>
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
    residente: {
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
    residenteNome: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        marginTop: 4
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
});
