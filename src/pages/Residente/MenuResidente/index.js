import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function MenuResidente() {

    const navigation = useNavigation();
return(
    <View style={styles.container}>

        <View style={styles.containerHeader}>
            <Text style={styles.headerText}>ComunicaPTS</Text>

            <TouchableOpacity style={styles.exitButton}
            onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.exitText}>Sair</Text>
            </TouchableOpacity>

            <Text style={styles.user}>Residente</Text>
            <Text style={styles.nome}>Nome Sobrenome</Text>
            <Image 
            source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/user.jpg')}
            style={styles.userIcon}
            resizeMode='contain'
            />
        </View>

        <View style={styles.containerForm}>
            <View style={styles.button}>
                <TouchableOpacity style={styles.menuButtons}
                onPress={() => navigation.navigate('AbrirChamadoResidente')}>
                    <Text style={styles.menuText}>ABRIR CHAMADO</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.menuButtons}
                onPress={() => navigation.navigate('MeusChamadosResidente')}>
                    <Text style={styles.menuText}>MEUS CHAMADOS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.menuButtons}
                onPress={() => navigation.navigate('AvisosResidente')}>
                    <Text style={styles.menuText}>AVISOS E NOTÍCIAS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.menuButtons}
                onPress={() => navigation.navigate('FinanceiroResidente')}>
                    <Text style={styles.menuText}>FINANCEIRO</Text>
                </TouchableOpacity>
                <Text style={styles.aviso}>!</Text>
            </View>
            

            <Image 
                source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/logopts.png')}
                style={styles.ptsLogo}
                resizeMode='contain'
            />
        </View>

    </View>
)}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    containerHeader:{
        flex: 2,
        backgroundColor: "#5DB075",
        marginBottom: 30
    },
    containerForm:{
        flex: 6,
        alignItems: 'center',
    },
    headerText:{
        marginTop: 10,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15
    },
    exitButton:{
        position: 'absolute',
        right: 16,
        marginTop: 17
    },
    exitText:{
        fontSize: 18,
        color: 'white'
    },
    user:{
        fontSize: 24,
        marginTop: 40,
        marginLeft: 140,
        fontWeight: 'bold'
    },
    userIcon:{
        position: 'absolute',
        maxWidth: '13%',
        maxHeight: '13%',
        borderRadius: 100,
        marginLeft: 50,
        marginTop: 82,
        borderWidth: 4,
        borderColor: 'white'
    },
    nome:{
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 140,
        fontSize: 20
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
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    ptsLogo:{
        marginTop: 45,
        maxHeight: '60%',
        maxWidth: '60%',
        
    },
    aviso:{
        position: 'absolute',
        marginTop: 30,
        right: -10,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    button:{
        flexDirection: 'row'
    }
})