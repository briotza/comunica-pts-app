import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function FinanceiroResidente() {

    const navigation = useNavigation();
return(
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.abrirText}>Financeiro</Text>

            <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.navigate('MenuResidente')}>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.containerForm}>
            <View style={styles.ano}>
                <TouchableOpacity style={styles.menuButtons}
                onPress={() => navigation.navigate('BoletoAnoResidente')}>
                    <Text style={styles.menuText}>2023</Text>
                </TouchableOpacity>
                <Text style={styles.aviso}>!</Text>
            </View>
            <View style={styles.ano}>
                <TouchableOpacity style={styles.menuButtons}
                onPress={() => navigation.navigate('FinanceiroResidente')}>
                    <Text style={styles.menuText}>2024</Text>
                </TouchableOpacity>
            </View>
            
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
        paddingHorizontal: 16
    },
    containerForm:{
        flex: 7,
        alignItems: 'center'
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
    menuButtons:{
        backgroundColor:'#5DB075',
        width: 250,
        height: 50,
        paddingVertical: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuText:{
        color: 'white',
        fontSize: 18
    },
    ano:{
        flexDirection: 'row'
    },
    aviso:{
        position: 'absolute',
        marginTop: 30,
        right: -10,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    }
})