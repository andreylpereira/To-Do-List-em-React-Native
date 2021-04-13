import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../services/axios';

const Home = ({navigation}) => {
  const tarefas_mock = [];
  // const tarefas_mock = [
  //   {
  //     nome: 'Comprar pão na casa do joão',
  //     descricao:
  //       'compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aa',
  //     data: '23/10/1950',
  //   },
  //   {
  //     nome:
  //       'Aula Angular na jamaica com o bob marley doidao de ervas suspeitas',
  //     descricao:
  //       'Assistir aula de Angular compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
  //     data: '24/10/1950',
  //   },
  //   {
  //     nome:
  //       'Aula Angular na jamaica com o bob marley doidao de ervas suspeitas',
  //     descricao:
  //       'Assistir aula de Angular compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
  //     data: '24/10/1950',
  //   },
  //   {
  //     nome:
  //       'Aula Angular na jamaica com o bob marley doidao de ervas suspeitas',
  //     descricao:
  //       'Assistir aula de Angular compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
  //     data: '24/10/1950',
  //   },
  // ]

  const [tarefas, setTarefas] = useState(tarefas_mock);

  const getTarefas = async () => {
    try {
      const response = await api.get('/tarefas');
      console.log(JSON.stringify(response));
      setTarefas(response.data);
    } catch (error) {
      console.log('DEU RUIM' + error);
    }
  };
  // getTarefas();

  const TextTarefa = ({item}) => {
    return (
      <View>
        <View style={css.buttons}>

          <Icon
            onPress={() => navigation.navigate('Editar')}
            name="edit-2"
            color={'#410CF5'}
            size={24}
            style={css.colorEdi}
          />

          <Icon
            onPress={() => navigation.navigate('Sobre')}
            name="trash-2"
            color={'#410CF5'}
            size={24}
            style={css.colorDel}
          />

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
        <Text style={css.subtittle}>Tarefas diários:</Text>
        <View style={css.scroll}>
          <View style={css.space}>
            {/* <ScrollView keyboardShouldPersistTaps='always' keyboardShouldPersistTaps='handled'> */}
            <FlatList
              data={tarefas}
              renderItem={TextTarefa}
              keyExtractor={tarefa => tarefa.nome}></FlatList>
            {/* </ScrollView> */}
          </View>
        </View>

        <TouchableOpacity style={css.buttonCadastro} onPress={getTarefas}>
          <Text style={css.buttonText}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.buttonCadastro}
          onPress={() => navigation.navigate('Cadastro')}>
          <Text style={css.buttonText}>Cadastro</Text>
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
  buttonCadastro: {
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
  buttonText: {
    color: '#410CF5',
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
    marginLeft: '83%',
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
  colorAdd: {
    color: '#19B354',
  },
  colorDel: {
    color: '#FA2201',
  },
  colorEdi: {
    color: '#4675C2',
    marginLeft: 1,
  },
});

export default Home;
