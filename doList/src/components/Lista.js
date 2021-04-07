import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Lista = ({navigation}) => {
      return(
        <>
          <View style={css.container}>
              <Text>Teste2</Text>
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
  }
});

export default Lista;