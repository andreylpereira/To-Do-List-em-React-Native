import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// Importei flatlist e touchableopacity e axios
import api from '../services/axios';

// Criei método get e fiz adicionei a função onpress
const Lista = ({navigation}) => {
  // const LISTAS_MOCK = [
  //   {
  //     nome: "tarefa5",
  //     descricao: "acordar cedo",
  //     data: "02 de Fevereiro de 2022"
  //   }
  // ]

  const [listas, setListas] = useState();

  const getListas = async () => {
    try{
      const response = await api.get('/');
      console.log(JSON.stringify(response));
      setListas(response.data);
    } catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  const TextListas = ({item}) => {
    return(
      <View>
        <Text style={css.container}>{item.nome} - {item.descricao} - {item.data}</Text>
      </View>
    )
  } 
  return(
    <>
      <View style={css.container}>
        <Text>To Do List</Text>

        <View>
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={css.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.button} onPress={getListas}>
            <Text style={css.buttonText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
        <Text style={css.tituloLista}>Listagem</Text>
        <FlatList
        data={listas}
        renderItem={TextListas}
        keyExtractor={ lista => lista.nome }
        
        
        ></FlatList>
      </View>
    </>
  );
}

const css = StyleSheet.create({

  container: {
    backgroundColor: '#EDEDE9',
    flex: 1,
    height: '100%',
    borderColor: '#410CF5',
    borderWidth: 2,
    borderTopWidth: 4,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  header: {
    fontSize: 42,
    marginBottom: 15
  },
  input:{
    width: 200,
    height: 40,
    marginVertical: 10,
    borderColor:'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20
  },
  button: {
    borderColor: '#ffd700',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#ffd700',
    width: 100,
    height: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText:{
    color:"#000"
  },
  cervejaNome: {
    borderColor: '#9e9e9e',
    borderTopWidth: 1,
    paddingVertical: 20,
    width: 200,
    textAlign: 'center'
  },
  tituloLista:{
    fontSize: 24,
    marginTop: 30,
    marginBottom: 20
  }
});

export default Lista;