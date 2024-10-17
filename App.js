import React, {Component, useState} from 'react';
import {Text, Button, StyleSheet, View, Image} from 'react-native';

export default function App() {
  const [szint, setSzint] = useState(1)
  const [pont, setPont] = useState(1)
  const [kocka, setKocka] = useState(1)
  const [dobas, setDobas] = useState(1)
  const [lathatoKocka, setLathatoKocka] = useState(false)

  function kockaDobas(){
    let vel = Math.floor(Math.random() * kocka)+1
    setLathatoKocka(true)
    setTimeout(() => {
      setLathatoKocka(false)
    }, 1200);
    setDobas(vel)
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
        <View style={styles.gomb}><Button onPress={kocka < 20 ? () => setKocka(kocka+1) : null} title="+" /></View>
        <View style={styles.kocka_doboz}><Text style={{fontSize: 20, color: 'white'}}>{kocka}</Text></View>
        <View style={styles.gomb}><Button onPress={kocka > 1 ? () => setKocka(kocka-1) : null} title="-" /></View>
        <View style={{width: '95%', marginVertical: '10%'}}><Button onPress={() => kockaDobas()} title="KOCKADOBÁS" /></View>
        <Text style={{fontSize: 18}}>Kocka eredménye:</Text>
        { lathatoKocka ? <Image source={require("./kocka.gif")} style={{width: 50, height: 50}}/> : <Text style={{fontSize: 22, fontWeight: 600}}>{dobas}</Text>}
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
  kocka_doboz: {
    backgroundColor: 'rgb(40,90,255)',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});