import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function BoletoMesResidente() {

    const navigation = useNavigation();
return(
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.abrirText}>Financeiro</Text>

            <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.navigate('BoletoAnoResidente')}>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

        </View>

        
        <View style={styles.containerAno}>
            <Text style={styles.ano}>2023</Text>
            <Text style={styles.mes}>Dezembro</Text>
        </View>

        <View style={styles.containerForm}>
        <View style={styles.info}>
            <Text style={styles.dados}>Situação: </Text>
            <Text style={styles.dadosSitu}>Pendente</Text>
        </View>

        <View style={styles.info}>
            <Text style={styles.dados}>Valor: </Text>
            <Text style={styles.dadosR}>R$ 0000,00</Text>
        </View>

        <View style={styles.info}>
            <Text style={styles.dados}>Vencimento: </Text>
            <Text style={styles.dadosR}>dd/mm/aaaa</Text>
        </View>
            
        </View>
        <View style={styles.containerEnd}>
            <TouchableOpacity style={styles.buttonDownload}>
                <Text style={styles.buttonText}>BAIXAR BOLETO</Text>
            </TouchableOpacity>
        </View>
        
    </View>
)}
const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    containerHeader:{
        marginTop: 10,
        flex: 1,
        paddingHorizontal: 16,

    },
    containerForm:{
        flex: 3,
        alignItems: 'flex-start',
        paddingLeft: 30
    },
    containerAno:{
        alignItems: 'center'
    },
    containerEnd:{
        alignItems: 'center',
        flex: 6
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
    ano:{
        color: '#5DB075',
        fontSize: 25,
        fontWeight: 'bold'
    },
    mes:{
        color: '#5DB075',
        fontSize: 18,
    },
    info:{
        flexDirection: 'row',
    },
    dados:{
        marginTop: 40,
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonDownload:{ //botão Anexo
        backgroundColor:'#5DB075',
        width: 170,
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
      dadosR:{
        marginTop: 40,
        fontSize: 18
      },
      dadosSitu:{
        marginTop: 40,
        fontSize: 18,
        color: 'red'
      }
})