import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'

import api from '../services/axios';

const Editar = ({ route, navigation }) => {
  const id = route.params._id;

  const [nomeLista, setNomeLista] = useState("");
  const [descricaoLista, setDescricaoLista] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const dataLista = startDate
  const [listas, setListas] = useState();

  // function formatDate(date) {
  //   let day = date.getDate().toString().padStart(2, "0");
  //   let month = date.getMonth().toString().padStart(2, "0");

  //   return `${day}/${month}/${date.getFullYear()}`;
  // }

  const editTarefas = async (id) => {
    try {
      const response = await api.put(`/tarefas/${id}`, { "nome": nomeLista, "descricao": descricaoLista, "data": dataLista });
      console.log(JSON.stringify(response.data));
      setListas(response.data)

    } catch (error) {
      console.log('DEU RUIM' + error);
    }

    navigation.goBack();
  }

  return (
    <>
      <View style={css.container}>
        <Text style={css.label}>Nome:</Text>
        <TextInput style={css.input} value={nomeLista} onChangeText={item => {
          setNomeLista(item)
        }}></TextInput>
        <Text style={css.label} value={dataLista}>Data:</Text>
        <DatePicker
          format="DD/MM/YYYY"
          style={css.dateComponente}
          date={startDate}
          onDateChange={date => setStartDate(date)}
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          mode="date"
          placeholder="Selecione uma data"
          customStyles={{
            dateInput: {
              borderWidth: 0
            },
          }}
        ></DatePicker>

        <Text style={css.label} >Descrição:</Text>
        <TextInput style={css.inputDescricao} multiline={true} value={descricaoLista} onChangeText={item => {
          setDescricaoLista(item)
        }}
        ></TextInput>

        <TouchableOpacity style={css.button} onPress={() => editTarefas(id)}>
          <Text style={css.buttonText}>Editar</Text>
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
    textDecorationLine: 'none',
    elevation: 9.5,
  },
  inputDescricao: {
    width: 320,
    height: 200,
    backgroundColor: '#FFFFFF',
    borderColor: '#F5D100',
    borderWidth: 1,
    borderRadius: 3.5,
    marginBottom: 15,
    textDecorationLine: 'none',
    fontSize: 12,
    textDecorationLine: 'none',
    fontFamily: 'Montserrat-Regular',
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
  },
  dateComponente: {
    width: 320,
    marginLeft: 3,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 3.5,
    borderColor: '#DE890B',
    backgroundColor: '#FFFFFF',
    elevation: 12.5,
  }
});

export default Editar;