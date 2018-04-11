import React from 'react';
import { StackNavigator } from 'react-navigation';

import Menu from "./components/Menu";
import VsIA from "./components/VsIA";
import Multi from "./components/Multi";
import CN from "./components/ChangeName";

export default class App extends React.Component {
  
  constructor(){
    
    super();
    //Pseudo par defaut
    global.LoginUser = 'Player 1';
    
  }
  
  
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator({
  Menuscreen: {
    screen: Menu,
  },
  LocalscreenIA: {
    screen: VsIA,
  },
  Multiscreen: {
    screen: Multi,
  },
  CNscreen: {
    screen: CN
  }
},{
  initialRouteName: 'Menuscreen',
}); 