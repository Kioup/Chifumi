import React from 'react';
import { Text, View } from 'react-native';
import Deck from './Deck';

export default class VsPlayer extends React.Component {
  render() {
    return (
      <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
      }}>
        <View>
          <Text>Player VS Player</Text>
        </View>
        <View>

          <Deck highlight="1" />

        </View>
      </View>
    );
  }
}
