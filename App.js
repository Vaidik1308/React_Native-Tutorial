import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  const getName = (first,second,third) => {
    return first + ', ' + second + ', ' + third;
  };
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>We are {getName('vaidik','sam','adam')}</Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
