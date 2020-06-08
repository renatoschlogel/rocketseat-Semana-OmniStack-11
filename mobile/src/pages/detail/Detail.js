import React from 'react';
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import * as MailComposer from "expo-mail-composer";
import '../../util/Format';

import styles from './DetailStyles';

import logoImg from '../../assets/logo.png';
import format from '../../utils/Format';


export default function Detail(){

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou estrando em contato, pois ` 
                + ` gostaria de ajudar no caso "${incident.title}"`
                + ` com valor de ${format.numberFormat(incident.value)}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail(params) {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}` ,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp(params) {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg}/>
      
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041"></Feather>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city} - {incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>{format.numberFormat(incident.value)}</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>
        <Text style={styles.heroDescription}>Entre em Contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
}