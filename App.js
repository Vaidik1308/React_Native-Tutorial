import React from 'react';
import { useState } from 'react'; 
import { StyleSheet, Text, View,Image } from 'react-native';
import Cat from './Cat';

export default function App() {
  const [isHungry,setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
      <Cat name="vaidik" isHungry={isHungry} setIsHungry={setIsHungry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    color:"white",
    justifyContent: 'center',
    width:'100%',
    height:'100vh',
  },
  
});
