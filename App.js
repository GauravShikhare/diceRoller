import React,{useState} from 'react'
import { View, Text,Image, TouchableOpacity ,StyleSheet} from 'react-native'

import DiceOne from "./assets/dice1.png"
import DiceTwo from "./assets/dice2.png"
import DiceThree from "./assets/dice3.png"
import DiceFour from "./assets/dice4.png"
import DiceFive from "./assets/dice5.png"
import DiceSix from "./assets/dice6.png"

export default function App() {

const[uri,setUri]=useState(DiceOne)
const[dice,setDice]=useState(DiceTwo)

const playButtonTapped=()=>{
  let randomNumber=Math.floor(Math.random()*6)+1
  let anotherRandomNumber=Math.floor(Math.random()*6)+1

  switch (randomNumber) {
    case 1:
      setUri(DiceOne)
      break;
    case 2:
      setUri(DiceTwo)
      break;
    case 3:
      setUri(DiceThree)
      brea
      
      k;
    case 4:
      setUri(DiceFour)
      break;
    case 5:
      setUri(DiceFive)
      break;
    case 6:
      setUri(DiceSix)
      break;
  
    default:
      setUri(DiceOne)
      break;
  }
  switch (anotherRandomNumber) {
    case 1:
      setDice(DiceOne)
      break;
    case 2:
      setDice(DiceTwo)
      break;
    case 3:
      setDice(DiceThree)
      break;
    case 4:
      setDice(DiceFour)
      break;
    case 5:
      setDice(DiceFive)
      break;
    case 6:
      setDice(DiceSix)
      break;
  
    default:
      setDice(DiceFive)
      break;
  }
}
  return (
    <>
    <View style={styles.container}>
    <TouchableOpacity onPress={playButtonTapped}>
     <Image source={uri} style={styles.imageContainer}/>
     <Image source={dice} style={styles.imageContainer}/>
   
       {/* <Text style={styles.textButton}>Roll Dice</Text> */}
     </TouchableOpacity>
    </View>
    </>
  )                                                                                                                

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#253341"
  },
    imageContainer: {
     height:200,
     width:200
  },
  textButton:{
    fontSize:20,
    paddingHorizontal:40,
    paddingVertical:10,
    borderWidth:5,
    borderColor:"#F27C4F",
    color:"#FFF",
    fontWeight:"bold",
    marginVertical:30,
    borderRadius:20
  }


})

+-        