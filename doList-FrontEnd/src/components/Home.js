import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

import api from '../services/axios';

const Home = ({ navigation }) => {
  const tarefas_mock = [];

  const [tarefas, setTarefas] = useState(tarefas_mock);

  const getTarefas = async () => {
    try {
      const response = await api.get('/tarefas');
      console.log(JSON.stringify(response.data));
      setTarefas(response.data);
    } catch (error) {
      console.log('DEU RUIM' + error);
    }
  };

  const deleteTarefa = async (id) => {
    try {
      const response = await api.delete(`/tarefas/${id}`)
      console.log(JSON.stringify(response.data));

    } catch (error) {
      console.log('DEU RUIM' + error);
    }
    getTarefas();
  };

  useEffect(() => {
    getTarefas();
  }, [getTarefas()])


  const TextTarefa = ({ item }) => {
    return (
      <View>
        <View style={css.buttons}>
          <View style={css.colorEdiBorder}>
            <Icon
              onPress={(() => navigation.navigate('Editar', { "_id": item._id }))}
              name="edit-2"
              color={'#410CF5'}
              size={24}
              style={css.colorEdi}
            />
          </View>
          <View style={css.colorDelBorder}>
            <Icon
              onPress={() => deleteTarefa(item._id)}
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
        <Text style={css.tittle}>Seja bem-vindo!</Text>
        <Text style={css.subtittle}>Tarefas diárias:</Text>
        <View style={css.scroll}>
          <View style={css.space}>
            <FlatList
              data={tarefas}
              renderItem={TextTarefa}
              keyExtractor={tarefa => tarefa.nome}
            />
          </View>
        </View>

        <TouchableOpacity style={css.buttonAtualizar} onPress={() => getTarefas()}>
          <Text style={css.buttonTextAtualizar}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.buttonCadastrar}
          onPress={() => navigation.navigate('Cadastro')}>
          <Text style={css.buttonTextCadastrar}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FA',
    height: '100%',
    borderColor: '#410CF5',
    borderWidth: 2,
    borderTopWidth: 4,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAtualizar: {
    borderWidth: 2,
    borderColor: '#DE890B',
    borderRadius: 20,
    backgroundColor: '#F5D100',
    width: 250,
    height: 50,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 7.5,
  },
  buttonTextAtualizar: {
    color: '#410CF5',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
  },
  buttonCadastrar: {
    borderWidth: 2,
    borderColor: '#2600A8',
    borderRadius: 20,
    backgroundColor: '#410CF5',
    width: 250,
    height: 50,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 7.5,
  },
  buttonTextCadastrar: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
  },

  card: {
    marginBottom: 25,
    marginLeft: '6%',
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
    height: 420,
    width: '97%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 9.5,
    borderColor: '#E1E1E1',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  tittle: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    color: '#410CF5',
    fontSize: 30,
    marginBottom: 25,
  },
  subtittle: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#410CF5',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: -240,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '73%',
    marginBottom: -9.5,
    marginTop: 5,
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
  }
});

export default Home;
