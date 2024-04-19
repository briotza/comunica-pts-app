import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AvisosDaf() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.abrirText}>Avisos e Notícias</Text>

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

            <ScrollView style={styles.containerNoticias}>
                <TouchableOpacity style={styles.noticia}
                onPress={() => navigation.navigate('NoticiaDaf')}>
                    <View style={styles.horario}>
                        <Text style={styles.data}>0min atrás</Text>
                    </View>
                    <Image
                        source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/sem-foto.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.noticiaConteudo}>
                        
                        <Text style={styles.titulo}>Título da Notícia Título da Notícia Título da Notícia Título da Notícia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noticia}
                onPress={() => navigation.navigate('NoticiaDaf')}>
                <View style={styles.horario}>
                        <Text style={styles.data}>0min atrás</Text>
                    </View>
                    <Image
                        source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/sem-foto.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.noticiaConteudo}>
                        
                        <Text style={styles.titulo}>Título da Notícia Título da Notícia Título da Notícia Título da Notícia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noticia}
                onPress={() => navigation.navigate('NoticiaDaf')}>
                <View style={styles.horario}>
                        <Text style={styles.data}>0min atrás</Text>
                    </View>
                    <Image
                        source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/sem-foto.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.noticiaConteudo}>
                        
                        <Text style={styles.titulo}>Título da Notícia Título da Notícia Título da Notícia Título da Notícia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noticia}
                onPress={() => navigation.navigate('NoticiaDaf')}>
                <View style={styles.horario}>
                        <Text style={styles.data}>0min atrás</Text>
                    </View>
                    <Image
                        source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/sem-foto.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.noticiaConteudo}>
                        
                        <Text style={styles.titulo}>Título da Notícia Título da Notícia Título da Notícia Título da Notícia</Text>
                    </View>
                </TouchableOpacity>
                {/* Adicione mais notícias conforme necessário */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHeader: {
        marginTop: 10,
        paddingHorizontal: 16
    },
    containerBody: {
        marginTop: 10,
        alignItems: 'center',
    },
    containerNoticias: {
        flex: 1
    },
    abrirText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10
    },
    backButton: {
        position: 'absolute',
        right: 16,
        marginTop: 20
    },
    backText: {
        color: '#5DB075',
        fontSize: 18
    },
    input: {
        backgroundColor: '#F6F6F6',
        height: 48,
        width: 340,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 100,
        paddingLeft: 10
    },
    image: {
        width: '100%',
        height: 120,
    },
    noticia: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    },
    noticiaConteudo: {
        padding: 10,
    },
    data: {
        color: '#BDBDBD',
        marginBottom: 5
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    horario:{
        alignItems: 'flex-end',
        right: 5
    }
});
