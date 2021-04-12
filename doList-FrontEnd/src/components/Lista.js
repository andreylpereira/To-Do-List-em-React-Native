import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../services/axios';

const Lista = ({navigation}) => {
  // const tarefas_Mock = [
  //   {
  //     nome: 'Comprar pão na casa do joão',
  //     descricao:
  //       'compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aa',
  //     data: '23/10/1950',
  //   },
  //   {
  //     nome:
  //       'Aula Angular na jamaica com o bob marley doidao de erv',
  //     descricao:
  //       'Assistir aula de Angular compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
  //     data: '24/10/1950',
  //   },
  //   {
  //     nome: 'Aula React-native',
  //     descricao:
  //       'Assistir aula de React-native compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
  //     data: '25/10/1950',
  //   },
  //   {
  //     nome: 'Aula Banco de dados',
  //     descricao: 'Assistir aula de Banco de dados',
  //     data: '26/10/1950',
  //   },
  //   {
  //     nome: 'Aula javascript',
  //     descricao:
  //       'Assistir aula de javascript compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
  //     data: '27/10/1950',
  //   },
  //   {
  //     nome: 'Aula javascript',
  //     descricao:
  //       'Assistir aula de javascript compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
  //     data: '27/10/1950',
  //   },
  //   {
  //     nome: 'Aula Banco de dados',
  //     descricao: 'Assistir aula de Banco de dados',
  //     data: '26/10/1950',
  //   },
  // ];

  const [listas, setListas] = useState();

  const getListas = async () => {
    try {
      const response = await api.get('/tarefas');
      console.log(JSON.stringify(response));
      setListas(response.data);
    } catch (error) {
      console.log('DEU RUIM' + error);
    }
  };
  getListas();

  const TextListas = ({item}) => {
    return (
      <View>
        <View style={css.buttons}>
          {/* <Icon
                        name="plus-square"
                        color={'#410CF5'}
                        size={24}
                        style={css.colorAdd}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('Cadastrar')
                          }></TouchableOpacity>
                      </Icon> */}
          <Icon name="edit" color={'#410CF5'} size={24} style={css.colorEdi}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Editar')}></TouchableOpacity>
          </Icon>
          <Icon name="trash-2" color={'#410CF5'} size={24} style={css.colorDel}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Editar')}></TouchableOpacity>
          </Icon>
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
          <ScrollView>
            <FlatList
              data={listas}
              renderItem={TextListas}
              keyExtractor={lista => lista.nome}></FlatList>
          </ScrollView>
        </View>
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
    height: '95%',
    width: '100%',
    paddingTop: 35,
    
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '82%',
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
  colorAdd: {
    color: '#19B354',
  },
  colorDel: {
    color: '#FA2201',
  },
  colorEdi: {
    color: '#4675C2',
    // marginTop: -1,
    marginLeft: 1,
  },
});

export default Lista;
