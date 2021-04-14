// Arquivo que cria uma nova tarefa

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/axios';

const Cadastro = ({ navigation }) => {

  const [nomeTarefa, setNomeTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [dataTarefa, setDataTarefa] = useState("");

  const createTarefa = async () => {

    if (nomeTarefa && descricaoTarefa && dataTarefa){
      try{
        const response = await api.post('/novasTarefas', {"nome": nomeTarefa, "descricao": descricaoTarefa, "data": dataTarefa});
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.log("Vazio")
    }
  }
  
  return (
    <>
      <View style={css.container}>

        <Text style={css.label}>Nome:</Text>
        <TextInput style={css.input}  value={nomeTarefa} onChangeText={item => {
          setNomeTarefa(item)
        }}></TextInput>

        <Text style={css.label}>Data:</Text>
        <TextInput style={css.input} value={dataTarefa} onChangeText={item => {
          setDataTarefa(item)
        }}></TextInput>

        <Text style={css.label}>Descrição:</Text>
        <TextInput style={css.inputDescricao} multiline={true} value={descricaoTarefa} onChangeText={item => {
          setDescricaoTarefa(item)
        }}></TextInput>

        <TouchableOpacity style={css.button} onPress={createTarefa}>
          <Text style={css.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

    </>
  );
}

const css = StyleSheet.create({

  container: {
    backgroundColor: '#F4F7FA',
    flex: 1,
    height: '100%',
    borderColor: '#410CF5',
    borderWidth: 2,
    borderTopWidth: 4,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
    elevation: 9.5
  },
  input: {
    width: 320,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderColor: '#DE890B',
    borderWidth: 1,
    borderRadius: 3.5,
    marginBottom: 15,
    textDecorationLine: 'none',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textDecorationLine:'none',
    elevation: 9.5,

  },
  inputDescricao: {
    width: 320,
    height: 200,
    backgroundColor: '#FFFFFF',
    borderColor: '#DE890B',
    borderWidth: 1,
    borderRadius: 3.5,
    marginBottom: 15,
    textDecorationLine: 'none',
    fontSize: 12,
    textDecorationLine:'none',
    elevation: 12.5,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#2600A8',
    borderRadius: 20,
    backgroundColor: '#410CF5',
    width: 250,
    height: 50,
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
    elevation: 7.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
    elevation: 7.5,
  },
  label: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    color: '#410CF5',
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontSize: 18,
    marginBottom: 6,
    marginLeft: 55,
    textDecorationLine: 'none',
    elevation: 7.5,
  }

});

export default Cadastro;