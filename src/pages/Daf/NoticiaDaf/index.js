import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function NoticiaDaf() {

    const navigation = useNavigation();
return(
    <ScrollView style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.abrirText}>Avisos e Notícias</Text>

            <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.navigate('AvisosDaf')}>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
        
        </View>
        <View style={styles.dateBar}>
            <Text style={styles.data}>dd/mm/aaaa</Text>
        </View>
        <View style={styles.containerBody}>
            <Image
                source={require('C:/Users/ciano.meliunas/Desktop/comunica-pts-app/assets/sem-foto.jpg')}
                style={styles.image}
                resizeMode='contain'
            />
            <Text style={styles.titulo}>Título da Notícia Título da Notícia Título da Notícia Título da Notícia</Text>
            <Text style={styles.corpo}>     A Rede de Ambientes Paulistas de Inovação (API), associação que reúne atualmente 29 instituições entre parques tecnológicos, centros de inovação, distritos tecnológicos, incubadoras e aceleradoras de startups, passa a contar com um espaço voltado a atendimentos, reuniões e encontros de seus integrantes, dentro de sua sede no Parque Tecnológico de Sorocaba (PTS). A inauguração do novo escritório aconteceu nesta sexta-feira (15), durante reunião de seus integrantes, ocasião em que também foi apresentado um balanço das ações realizadas ao deste ano, além de discussão sobre projetos futuros e anúncios como a aprovação de um projeto de políticas públicas junto à Fapesp, em parceria com a Secretaria de Ciência, Tecnologia e Inovação do Estado de São Paulo.
A Rede de Ambientes Paulistas de Inovação (API), associação que reúne atualmente 29 instituições entre parques tecnológicos, centros de inovação, distritos tecnológicos, incubadoras e aceleradoras de startups, passa a contar com um espaço voltado a atendimentos, reuniões e encontros de seus integrantes, dentro de sua sede no Parque Tecnológico de Sorocaba (PTS). A inauguração do novo escritório aconteceu nesta sexta-feira (15), durante reunião de seus integrantes, ocasião em que também foi apresentado um balanço das ações realizadas ao deste ano, além de discussão sobre projetos futuros e anúncios como a aprovação de um projeto de políticas públicas junto à Fapesp, em parceria com a Secretaria de Ciência, Tecnologia e Inovação do Estado de São Paulo.
</Text>
        </View>
    </ScrollView>
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
    containerBody:{
        flex: 8,
        alignItems: 'center',
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
    image:{
        marginTop: 5,
        height: 260,
        maxWidth: '100%'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10
    },
    corpo:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: 'justify'
    },
    dateBar:{
        marginTop: 12,
        alignItems: 'flex-end',
        right: 5,
    },
    data:{
        color: '#BDBDBD'
    }
})