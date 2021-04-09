import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// Importei tambem o TouchableOpacity
// Importei o axios
import api from '../services/axios';

const Cadastro = ({ navigation }) => {
  // Criei uma constante com os valores da nossa lista
  const [nomeLista, setNomeLista] = useState("");
  const [descricaoLista, setDescricaoLista] = useState("");
  const [dataLista, setDataLista] = useState("");

  // Criei uma constante que valida a nossa lista e adicionei o método post
  const createLista = async () => {

    if (nomeLista && descricaoLista && dataLista){
      try{
        const response = await api.post('/', {"nome": nomeLista, "descricao": descricaoLista, "data": dataLista});
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.log("Vazio")
    }
  }
  
  // adicionei os valores da lista dentro do valor do campo e adicionei o onChange que set a variavel
  return (
    <>
      <View style={css.container}>

        <Text style={css.label}>Nome:</Text>
        <TextInput style={css.input}  value={nomeLista} onChangeText={item => {
          setNomeLista(item)
        }}></TextInput>

        <Text style={css.label}>Descrição:</Text>
        <TextInput style={css.inputDescricao} multiline={true} value={descricaoLista} onChangeText={item => {
          setDescricaoLista(item)
        }}></TextInput>

        <Text style={css.label}>Data:</Text>
        <TextInput style={css.input} value={dataLista} onChangeText={item => {
          setDataLista(item)
        }}></TextInput>

        <TouchableOpacity style={css.button} onPress={createLista}>
          <Text style={css.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

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
    elevation: 9.5
  },
  input: {
    width: 320,
    height: 30,
    backgroundColor: '#FFFFFF',
    borderColor: '#F5B319',
    borderWidth: 1,
    borderRadius: 3.5,
    marginBottom: 15,
    textDecorationLine: 'none',
    fontFamily: 'Montserrat-Regular',
    elevation: 9.5,
  },
  inputDescricao: {
    width: 320,
    height: 200,
    backgroundColor: '#FFFFFF',
    borderColor: '#F5B319',
    borderWidth: 1,
    borderRadius: 3.5,
    marginBottom: 15,
    textDecorationLine: 'none',
    elevation: 12.5,
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
    fontFamily: 'Montserrat-Regular',
    elevation: 7.5,
  },
  label: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    color: '#410CF5',
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontSize: 16,
    marginBottom: 6,
    textDecorationLine: 'none',
    elevation: 7.5,
  }

});

export default Cadastro;