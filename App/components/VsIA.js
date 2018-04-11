import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native';

export default class VsIA extends React.Component {

    constructor(props) {
      super(props)
      this.state = { 
        ptsIA: 0,
        ptsPerso : 0,
        choixIA: 'Player VS IA',
        statusGame: '',
      }
    }
    
  /*  Rock is 1
      Paper is 2
      Scissors is 3
  */
    _onPressButton = {
        rock : () => {
          this._getRandomChoice(1)
        },
        paper :  () => {
          this._getRandomChoice(2)
        },
        scissors : () => {
          this._getRandomChoice(3)
        }
    }
    
    _getRandomChoice = (perso) => {
        switch( Math.floor(Math.random() * 3 + 1) ) {
          case 1:
            this.setState({
              choixIA : (
                <Image source={require('../assets/Rock.jpg')} style={{marginTop:200}}/>
              )
            })
            this._getScore(perso,1)
            break
          case 2:
            this.setState({
              choixIA : (
                <Image source={require('../assets/Paper.jpg')} style={{marginTop:200}}/>
              )
            })
            this._getScore(perso,2)
            break
          case 3:
            this.setState({
              choixIA : (
                <Image source={require('../assets/Scissors.jpg')} style={{marginTop:200}}/>
              )
            })
            this._getScore(perso,3)
            break
        }
    }
    
    _getScore = (perso, ia) => {
      
      if (perso == ia) {
          this.setState({
              statusGame : 'Egalité'
          })
      } else {
      
        switch (perso) {
          case 1:
            if (ia == 2){
              this._getLoose()
            } else if (ia == 3) {
              this._getWin()
            }
            break
          case 2:
            if (ia == 1) {
              this._getWin()
            } else if (ia == 3) {
              this._getLoose()
            }
            break
          case 3:
            if (ia == 1) {
              this._getLoose()
            } else if (ia == 2) {
              this._getWin()
            }
            break
        }
      }
      
    }
    
    _getWin = () => {
      
      this.setState({
          statusGame : 'Gagné !',
          ptsPerso : this.state.ptsPerso + 1
      })
      
    }
    
    _getLoose = () => {
      
      this.setState({
          statusGame : 'Perdu :(',
          ptsIA : this.state.ptsIA + 1
      })
      
    }
    
    //animation Component
    
    componentWillMount(){
      this.animatedValue = new Animated.Value(1)
      this.animatedTest = new Animated.Value(120)
    }
    
    componentDidMount() {
      Animated.timing(this.animatedValue, {
        toValue: 2,
        duration: 500,
      }).start()
    }

  render() {
    const AnimatedStyle = {flexGrow : this.animatedValue}
    let style = StyleSheet.create({
      touch: {
        width: 1,
        height: 120,
        flexGrow: 1,
      },
      touch2: {
        width: 1,
        height: 150,
        flexGrow: 2,
      },
      image: {
        width: '100%',
        height: '100%',
      },
      view: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height : '100%'
      },
      center : {
        flexDirection : 'row', 
        justifyContent : 'center', 
      }
    });

    return (
      <View style={style.view}>
        <View style={style.center}>
          <Text>{this.state.choixIA}</Text>
        </View>
        <View style={style.center}>
          <Text>{this.state.statusGame}</Text>
        </View>
        <View style={style.center}>
          <Text>Score : IA ({this.state.ptsIA}) - {global.LoginUser} ({this.state.ptsPerso})</Text>
        </View>
        
        
        <Animated.View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={style.touch}
            onPress={this._onPressButton.rock}>
            <Image source={require('../assets/Rock.jpg')} style={style.image} />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={style.touch}
            onPress={this._onPressButton.paper}>
            <Image
              source={require('../assets/Paper.jpg')} style={style.image} />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={style.touch}
            onPress={this._onPressButton.scissors}>
            <Image
              source={require('../assets/Scissors.jpg')} style={style.image} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}