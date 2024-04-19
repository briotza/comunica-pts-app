import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'



export default function EnergiaResidente() {

    const navigation = useNavigation();
    const [departamento,setDepart] = useState('');
return(
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.abrirText}>Consumo de Energia</Text>

            <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.navigate('MenuResidente')}>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.containerGrafico}>

        </View>

        <View style={styles.containerDetalhamento}>
            <Text style={styles.titulo}>Detalhamento</Text>
            <Text style={styles.mes}>Mes 1</Text>
            <Text style={styles.detalhes}>Consumo KWh: </Text>
            <Text style={styles.detalhesR}>000</Text>
            <Text style={styles.detalhes}>Valor: </Text>
            <Text style={styles.detalhesR}>R$ 000,00</Text>
            <Text style={styles.mes}>Mes 2</Text>
            <Text style={styles.detalhes}>Consumo KWh: </Text>
            <Text style={styles.detalhesR}>000</Text>
            <Text style={styles.detalhes}>Valor: </Text>
            <Text style={styles.detalhesR}>R$ 000,00</Text>
        </View>
        
       
    </View>
)}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    containerHeader:{
        marginTop: 10,
        flex: 0.5,
        paddingHorizontal: 16,
    },
    containerGrafico:{
        backgroundColor: 'red',
        flex: 3
    },
    containerDetalhamento:{
        flex: 4
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
    titulo:{
        fontSize: 26,
        marginLeft: 15
    },
    mes:{
        fontSize: 20,
        marginLeft: 35

    }
    
})