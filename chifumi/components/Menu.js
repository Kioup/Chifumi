import React from 'react';

//import Multi from "./multi";
import { Text, View, Image, Button, Alert } from 'react-native';

export default class Menu extends React.Component {
  
  _localButtonPress = () => {
   this.props.navigation.navigate('Localscreen')
  };
  _multiButtonPress = () => {
    Alert.alert(
      'Coming Soon!',
    );
  };

  render() {
    let style = {
      image : {
        width:    1,
        height:   120,
        flexGrow: 1,
      }
    }
    return (
      <View>
        <View>
          <Text style={{fontSize: 30, alignSelf: "center", marginTop: 40, marginBottom: 20}}>Welcome Player !!!</Text>
          <Text style={{fontSize: 40, alignSelf: "center"}}>Chi-Fu-Mi</Text>
        </View>
        <View style={{marginTop: 60, flexDirection: 'row'}}>
          <Image source={require('../assets/Scissors.jpg')} style={style.image}/>
          <Image source={require('../assets/Paper.jpg')} style={style.image}/>
          <Image source={require('../assets/Rock.jpg')} style={style.image}/>
        </View>
        <View style={{marginTop: 80, flexDirection: 'row', justifyContent: "space-around"}}>
          <Button title="1 vs 1" 
                  style={{padding: 40}}
                  onPress={this._localButtonPress}
          />
          <Button title="1 vs IA" 
                  style={{padding: 40}}
                  onPress={this._localButtonPress}
          />
          <Button title="Online" 
                  style={{padding: 40}}
                  onPress={this._multiButtonPress}
          />
        
        </View>
      </View>
    );
  }
}