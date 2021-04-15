import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../services/axios';

const Lista = ({ navigation }) => {

  const [listas, setListas] = useState();

  const getTarefas = async () => {
    try {
      const response = await api.get('/tarefas');
      console.log(JSON.stringify(response.data));
      setListas(response.data);

    } catch (error) {
      console.log('DEU RUIM' + error);
    }
  }

  getTarefas();


  const TextListas = ({ item }) => {
    return (
      <View>
        <View style={css.buttons}>
          <View style={css.colorEdiBorder}>
            <Icon
              onPress={() => navigation.navigate('Editar')}
              name="edit-2"
              color={'#410CF5'}
              size={24}
              style={css.colorEdi}
            />
          </View>
          <View style={css.colorDelBorder}>
            <Icon
              onPress={() => navigation.navigate('Sobre')}
              name="trash-2"
              color={'#410CF5'}
              size={24}
              style={css.colorDel}
            />
          </View>
        </View>
        <View style={css.card}>
          <Text style={css.header}>
            {item.data} - {item.nome}
          </Text>
          <Text style={css.description}>{item.descricao}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={css.container}>
        <View style={css.scroll}>
          <FlatList
            data={listas}
            renderItem={TextListas}
            keyExtractor={lista => lista.nome}
          />
        </View>
        <TouchableOpacity style={css.buttonCadastro} onPress={() => getTarefas()}>
          <Text style={css.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    borderColor: '#410CF5',
    borderWidth: 2,
    borderTopWidth: 4,
  },
  card: {
    marginBottom: 25,
    marginLeft: '5%',
    width: '88%',
    backgroundColor: '#F5D100',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#410CF5',
    elevation: 15,
  },
  header: {
    textAlign: 'center',
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#410CF5',
    fontFamily: 'Montserrat-SemiBoldItalic',
    fontSize: 17,
    color: '#410CF5',
  },
  description: {
    textAlign: 'left',
    margin: 5,
    marginBottom: 10,
    fontFamily: 'Montserrat-MediumBold',
    color: '#410CF5',
    fontSize: 14,
  },
  scroll: {
    height: '85%',
    width: '100%',
    paddingTop: 35,

  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '73%',
    marginBottom: -9.5,
  },
  button: {
    padding: 5,
    marginLeft: 30,
    borderColor: '#410CF5',
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  // colorAdd: {
  //   color: '#19B354',
  // },
  colorDel: {
    backgroundColor: '#FA2201',
    color: '#FFFFFF',
    marginTop: 2.5,
  },
  colorEdi: {
    backgroundColor: '#4675C2',
    marginLeft: 1,
    color: '#FFFFFF',
    marginTop: 2.5,
  },
  colorDelBorder: {
    alignItems: 'center',
    color: '#FA2201',
    margin: 5,
    width: 35,
    height: 35,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#C7C3C4',
    backgroundColor: '#FA2201',
    elevation: 7.5,
  },
  colorEdiBorder: {
    alignItems: 'center',
    color: '#4675C2',
    margin: 5,
    width: 35,
    height: 35,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#C7C3C4',
    backgroundColor: '#4675C2',
    elevation: 7.5,
  },
  buttonCadastro: {
    borderWidth: 2,
    borderColor: '#DE890B',
    borderRadius: 20,
    backgroundColor: '#F5D100',
    width: 250,
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    elevation: 7.5,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#410CF5',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
  },
});

export default Lista;
