import React from 'react';

import Deck from './Deck';
import { Text, View, Button, Alert } from 'react-native';

export default class Menu extends React.Component {
  _localPlayerButtonPress = () => {
    this.props.navigation.navigate('LocalscreenPlayer');
  };
  _localIAButtonPress = () => {
    this.props.navigation.navigate('LocalscreenIA');
  };
  _multiButtonPress = () => {
    Alert.alert('Coming Soon!');
  };

  render() {
    return (
      <View>
        <View style={{marginBottom: 60}}>
          <Text style={{
              fontSize: 30,
              alignSelf: 'center',
              marginTop: 40,
              marginBottom: 20,
          }}>
            Welcome Player !!!
          </Text>
          <Text style={{ fontSize: 40, alignSelf: 'center' }}>Chi-Fu-Mi</Text>
        </View>
        <Deck/>
        <View style={{
            marginTop: 80,
            flexDirection: 'row',
            justifyContent: 'space-around',
        }}>
          <Button
            title="1 vs 1"
            style={{ padding: 40 }}
            onPress={this._localPlayerButtonPress}
          />
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
