import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const Index = ({navigation}) => {

      return(
        <>
          <View style={css.container}>

              <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={css.buttonText}>Adicionar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={css.button}  onPress={() => navigation.navigate('Editar')}>
                <Text style={css.buttonText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={css.buttonText}>Remover</Text>
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
  },
  button: {
    borderWidth: 2,
    borderColor: '#DE890B',
    borderRadius: 20,
    backgroundColor: '#F5D100',
    width: 250,
    height: 50,
    alignItems: 'center',
    marginTop: 15,
    elevation: 7.5,
  },
  buttonText: {
    color: '#410CF5',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium'
  },

});

export default Index;