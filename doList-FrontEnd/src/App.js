import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {StatusBar, StyleSheet, Text, View} from 'react-native';

import Index from './components/Index';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Lista from './components/Lista';
import Editar from './components/Editar';
import Sobre from './components/Sobre';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F5D100',
        inactiveTintColor: '#EDEDE9',

        labelStyle: {
          fontSize: 11,
          fontFamily: 'Montserrat-SemiBold',
        },
        style: {
          borderTopWidth: 4,
          borderBottomWidth: 2,
          borderTopColor: '#410CF5',
          borderBottomColor: '#410CF5',
          backgroundColor: '#410CF5',
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="LISTA"
        component={Lista}
        options={{
          tabBarLabel: 'LISTA',
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />

      {/* <Tab.Screen name="MENU"
        component={Index}
        options={{
          tabBarLabel: 'MENU',
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="To Do List"
            component={Tabs}
            options={{
              headerLeft: () => (
                <View>
                  <Icon
                    name={'clipboard'}
                    size={30}
                    color={'#FFFFFF'}
                    style={css.container}
                  />
                </View>
              ),
              headerTintColor: '#EDEDE9',
              headerTitleStyle: {
                marginLeft: 95,
                fontFamily: 'Montserrat-SemiBoldItalic',
              },
              headerStyle: {
                backgroundColor: '#410CF5',
                borderBottomWidth: 4,
                borderBottomColor: '#F5D100',
              },
            }}
          />
          <Stack.Screen
            name="HOME"
            component={Home}
            options={{
              headerTintColor: '#EDEDE9',
              headerTitleStyle: {
                alignSelf: 'center',
                fontFamily: 'Montserrat-SemiBoldItalic',
              },
              headerStyle: {
                backgroundColor: '#410CF5',
                borderBottomWidth: 4,
                borderBottomColor: '#F5D100',
              },
            }}
          />

          <Stack.Screen
            name="Lista"
            component={Lista}
            options={{
              headerTintColor: '#EDEDE9',
              headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
              headerStyle: {
                backgroundColor: '#410CF5',
                borderBottomWidth: 4,
                borderBottomColor: '#F5D100',
              },
            }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              headerTintColor: '#EDEDE9',
              headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
              headerStyle: {
                backgroundColor: '#410CF5',
                borderBottomWidth: 4,
                borderBottomColor: '#F5D100',
              },
            }}
          />
          <Stack.Screen
            name="Editar"
            component={Editar}
            options={{
              headerTintColor: '#EDEDE9',
              headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
              headerStyle: {
                backgroundColor: '#410CF5',
                borderBottomWidth: 4,
                borderBottomColor: '#F5D100',
              },
            }}
          />

          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{
              headerTintColor: '#EDEDE9',
              headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
              headerStyle: {
                backgroundColor: '#410CF5',
                borderBottomWidth: 4,
                borderBottomColor: '#F5D100',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    marginLeft: 130,
    color: '#F5D100',
  },
});

export default App;
