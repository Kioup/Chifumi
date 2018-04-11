import React from 'react';

import { Text, View, Button, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Menu extends React.Component {
    static navigationOptions = {
        header: null
    }
  
  _localIAButtonPress = () => {
    this.props.navigation.navigate('LocalscreenIA');
  };
  _cnButtonPress = () => {
    //Alert.alert('Coming Soon!');
    this.props.navigation.navigate('CNscreen');
  };
  _multiButtonPress = () => {
    Alert.alert('Coming Soon!');
    //this.props.navigation.navigate('Multiscreen');
  };


  render() {
      let style = StyleSheet.create({
        img : {
          width: 1,
          height: 120,
          flexGrow: 1,
        },
        texte : {
         fontSize: 30,
          alignSelf: 'center',
          marginTop: 40,
          
        },
        view : {
            marginTop: 80,
            flexDirection: 'row',
            justifyContent: 'space-around',
        }
      })
    
    
    
    
    
    return (
      <View>
        <View style={{marginBottom: 60, marginTop: 50}}>
          <Text style={style.texte}>
            Welcome {global.LoginUser} !!!
          </Text>
          <TouchableOpacity onPress={this._cnButtonPress}>
            <Text style={{ fontSize: 20, alignSelf: 'center', marginBottom: 20 }}>
              Changer de pseudo ?
             </Text>
          </TouchableOpacity>
          
          <Text style={{ fontSize: 40, alignSelf: 'center' }}>Chi-Fu-Mi</Text>
        </View>
         <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/Rock.jpg')} style={style.img} />
          <Image source={require('../assets/Paper.jpg')} style={style.img} />
          <Image source={require('../assets/Scissors.jpg')} style={style.img} />
        </View>
        <View style={style.view}>
          <Button
            title="1 vs IA"
            style={{ padding: 40 }}
            onPress={this._localIAButtonPress}
          />
          <Button
            title="Online"
            style={{ padding: 40 }}
            onPress={this._multiButtonPress}
          />
        </View>
      </View>
    );
  }
}
