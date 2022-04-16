import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { ScrollView } from 'react-native-web';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square1}>
          <Text style={styles.title}>Quadrado 1</Text>
        </View>
        <View style={styles.square2}>
          <Text style={styles.title}>Quadrado 2</Text>
        </View>
        <View style={styles.square3}>
          <Text style={styles.title}>Quadrado 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    color: 'white',
  },
  square1: {
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
    aspectRatio: 1
  },
  square2: {
    backgroundColor: 'lightseagreen',
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
    aspectRatio: 1
  },
  square3: {
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
    aspectRatio: 1,
  }
});