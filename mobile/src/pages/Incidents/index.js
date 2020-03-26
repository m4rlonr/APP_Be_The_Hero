import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from "../../assets/logo.png";

import styles from './styles';

export default function Incidents() {

  const navigation = useNavigation();

  function navegationToDetail(){
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}> Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
    
      <FlatList
        data={[1, 2, 3]}
        style={styles.IncidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => {
          <View style={styles.Incident}>
            <Text style={styles.IncidentProperty}>ONG: </Text>
            <Text style={styles.IncidentValue}>Sem Ção: </Text>

            <Text style={styles.IncidentProperty}>CASO: </Text>
            <Text style={styles.IncidentValue}>Cachorro para adoção</Text>

            <Text style={styles.IncidentProperty}>VALOR: </Text>
            <Text style={styles.IncidentValue}>R$ 120 </Text>

            <TouchableOpacity
              style={styles.detailButton}
              onPress={navegationToDetail}
            >
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color='#e02041'/>
            </TouchableOpacity>
          </View>
        }}
      />
      <View style={styles.IncidentList}>
        <View style={styles.Incident}>
          <Text style={styles.IncidentProperty}>ONG: </Text>
          <Text style={styles.IncidentValue}>Sem Cachorro </Text>

          <Text style={styles.IncidentProperty}>CASO: </Text>
          <Text style={styles.IncidentValue}>Cachorro para adoção</Text>

          <Text style={styles.IncidentProperty}>VALOR: </Text>
          <Text style={styles.IncidentValue}>R$ 120 </Text>

          <TouchableOpacity
            style={styles.detailButton}
            onPress={navegationToDetail}
          >
            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color='#e02041'/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
