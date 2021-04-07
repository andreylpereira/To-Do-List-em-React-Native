import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';



const Home = ({navigation}) => {

      return(
        <>
          <View style={css.container}>
              {/* <Text>Seja Bem-vindo!</Text> */}

              <TouchableOpacity style={css.button}  onPress={() => navigation.navigate('Lista')}>
                <Text style={css.buttonText}>Lista</Text>
              </TouchableOpacity>

              <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={css.buttonText}>Cadastro</Text>
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

  },
  button: {
    borderWidth: 2,
    borderColor: '#2600A8',
    borderRadius: 20,
    backgroundColor: '#410CF5',
    width: 250,
    height: 50,
    alignItems: 'center',
    marginTop: 15,
    elevation: 7.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium'
  },

});

export default Home;