import React from 'react';
import { Text, View, Image, TouchableHighlights } from 'react-native';

export default class Local extends React.Component {
  render() {
    let Chifumi = {
      Feuille : "../assets/Paper.jpg",
      Rock : "../assets/Rock.jpg",
      Ciseaux : "../assets/Scissors.jpg"
    }
    let style = {
      touch : {
        width:    1,
        height:   120,
        flexGrow: 1,
      }
    }
    let Tab = Object.values(Chifumi).map(img => (
      <TouchableHighlights style={style.touch}>
        <Image source={require(img)} style={style.image} />
      </TouchableHighlights>
      ))
    return (
      <View style={{flexDirection: "column", justifyContent: "space-between", height:"100%"}}>
        <View>
          <Text>Local Screen</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
          {Tab}
          </View>
        </View>
      </View>
    );
  }
}