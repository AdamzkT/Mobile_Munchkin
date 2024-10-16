import React, {Component, useState} from 'react';
import {Text, Alert, Button, StyleSheet, View} from 'react-native';

export default function App() {
  const [szint, setSzint] = useState(1)
  const [pont, setPont] = useState(1)
  const [kocka, setKocka] = useState(1)

  function onPressButton() {
    Alert.alert('You tapped the button!');
  }

  return (
    <View style={styles.container}>
      <View style={[styles.doboz_1, {flex: 2, flexDirection: 'row'}]}>
        <View style={styles.doboz_2}>
          <View style={[styles.szoveg_doboz, {width: '100%',}]}><Text style={styles.szoveg}>SZINTEK száma:</Text></View>
          <View style={styles.gomb}><Button onPress={szint < 10 ? () => setSzint(szint+1) : null} title="+" /></View>
          <View style={[styles.szoveg_doboz, {width: '50%',}]}><Text style={styles.szoveg}>{szint}</Text></View>
          <View style={styles.gomb}><Button onPress={szint > 1 ? () => setSzint(szint-1) : null} title="-" /></View>
        </View>
        <View style={styles.doboz_2}>
          <View style={[styles.szoveg_doboz, {width: '100%',}]}><Text style={styles.szoveg}>PONTOK száma:</Text></View>
          <View style={styles.gomb}><Button onPress={pont < 10 ? () => setPont(pont+1) : null} title="+" /></View>
          <View style={[styles.szoveg_doboz, {width: '50%',}]}><Text style={styles.szoveg}>{pont}</Text></View>
          <View style={styles.gomb}><Button onPress={pont > 1 ? () => setPont(pont-1) : null} title="-" /></View>
        </View>
      </View>
      <View style={[styles.doboz_3, {flex: 3}]}>
        <Text style={{fontSize: 18}}>Kocka oldalszáma:</Text>
        <View style={styles.gomb}><Button title="+" /></View>
        <Text style={{fontSize: 18, width: '60%', backgroundColor: 'red', color: 'white'}}>Kocka oldalszáma:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  doboz_1: {
    flex: 1,
  },
  doboz_2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(190,190,190)',
    width: '50%',
    height: '70%',
    margin: 5,
    marginTop: '20%',
    padding: '2%',
  },
  szoveg_doboz: {
    height: 45,
    justifyContent: 'center',
    backgroundColor: 'rgb(150,0,0)',
  },
  szoveg: {
    textAlign: 'center',
    color: 'white',
  },
  gomb: {
    width: '50%',
    marginVertical: '5%',
  },
  doboz_3: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});