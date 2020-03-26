import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from "../../assets/logo.png";

import styles from './styles';

export default function Detail(){
  const navigation = useNavigation();
  const message = 'Olá ONG estou entrando em contato pois gostaria de ajudar no caso "adoção de cachorro"'

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: "Herói do caso: Cachorro para adoção",
      recipients: "marlon.r@unemat.br",
      body: message
    })
  }
  function sendWhastapp(){
    Linking.openURL(`whatsapp://send?phone=+556584060387&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041"/>
        </TouchableOpacity>
      </View>

      <View style={styles.Incident}>
        <Text style={[styles.IncidentProperty, { marginTop: 0 }]}>ONG: </Text>
        <Text style={styles.IncidentValue}>Sem Ção: </Text>

        <Text style={styles.IncidentProperty}>CASO: </Text>
        <Text style={styles.IncidentValue}>Cachorro para adoção</Text>

        <Text style={styles.IncidentProperty}>VALOR: </Text>
        <Text style={styles.IncidentValue}>R$ 120 </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhastapp} >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail} >
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}