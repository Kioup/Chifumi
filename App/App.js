import React from 'react';
import { StackNavigator } from 'react-navigation';

import Menu from "./components/Menu";
import VsPlayer from "./components/VsPlayer";
import VsIA from "./components/VsIA";
import Multi from "./components/Multi";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator({
  Menuscreen: {
    screen: Menu,
  },
  LocalscreenPlayer: {
    screen: VsPlayer,
  },
  LocalscreenIA: {
    screen: VsIA,
  },
  Multiscreen: {
    screen: Multi,
  }
},{
  initialRouteName: 'Menuscreen',
});