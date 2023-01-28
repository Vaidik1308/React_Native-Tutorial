import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Cat = ({name,isHungry,setIsHungry}) => {
  return (
    <View style={styles.div}>
      <Text style={styles.text}>I am a {name} and I am {isHungry ? 'hungry' : 'full'}</Text>
      <button 
        style={styles.btn}
        onClick={() => setIsHungry(!isHungry)}
        disabled={!isHungry}

      >{isHungry ? 'Pour me some milk' : 'Thank You'}</button>
      
    </View>
  )
}

export default Cat

const styles = StyleSheet.create({
    div: {
      height:"80vh",
      backgroundColor:"white",
      width:'80%',
      margin:'auto',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      borderRadius:'18px',
      boxShadow:'1px 2px 3px 4px  '
    
    },
    text:{
    
        padding:'10px',
    },
    btn:{
        height:'12vh',
        width:'40%',
        margin:'auto',
        color:'black',
        boxShadow:'1px 2px 3px 1px  ',
        borderRadius:'18px',

    }
    
  });