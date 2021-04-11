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


const Home = ({navigation}) => {
  const tarefas = [
    {
      nome: 'Comprar pão na casa do joão',
      descricao:
        'compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aa',
      data: '23/10/1950',
    },
    {
      nome:
        'Aula Angular na jamaica com o bob marley doidao de ervas suspeitas',
      descricao:
        'Assistir aula de Angular compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
      data: '24/10/1950',
    },
    {
      nome:
        'Aula Angular na jamaica com o bob marley doidao de ervas suspeitas',
      descricao:
        'Assistir aula de Angular compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
      data: '24/10/1950',
    },
    {
      nome:
        'Aula Angular na jamaica com o bob marley doidao de ervas suspeitas',
      descricao:
        'Assistir aula de Angular compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra compra pão na padaria pão doce pãoaaaaaaaaaaaa aa compra pão na padaria pão doce pãoaaaaaaaaaaaa aacompra',
      data: '24/10/1950',
    },
  ];

  return (
    <>
      <View style={css.container}>
        <Text style={css.tittle}>Seja bem-vindo!</Text>
        <Text style={css.subtittle}>Tarefas diários:</Text>
        <View style={css.scroll}>
          <View style={css.space}>
          <ScrollView>
            <FlatList
              data={tarefas}
              renderItem={obj => {
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
                      <Icon
                        name="edit-2"
                        color={'#410CF5'}
                        size={24}
                        style={css.colorEdi}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('Cadastrar')
                          }></TouchableOpacity>
                      </Icon>
                      <Icon
                        name="trash-2"
                        color={'#410CF5'}
                        size={24}
                        style={css.colorDel}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('Cadastrar')
                          }></TouchableOpacity>
                      </Icon>
                    </View>
                    <View style={css.card}>
                      <Text style={css.header}>
                        {obj.item.data} - {obj.item.nome}
                      </Text>
                      <Text style={css.description}>{obj.item.descricao}</Text>
                    </View>
                  </View>
                );
              }}></FlatList>
          </ScrollView>
          </View>
        </View>
        
        {/* <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('Lista')}>
          <Text style={css.buttonText}>Lista</Text>
        </TouchableOpacity> */}

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
    backgroundColor: '#FFFFFF',
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
    marginTop: 20,
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
    marginLeft: '5%',
    width: '90%',
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
    height: 450,
    width: '100%',
  },
  tittle: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    color: '#410CF5',
    fontSize: 30,
    marginBottom: 45
  },
  subtittle: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#410CF5',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: -240
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '84%',
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
    marginLeft: 1
  },
});

export default Home;
