import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

function About({ navigation }) {
  return (
    <View style={styles.center}>
      <Text>Essa é a tela sobre</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Ir para a Home" />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export { About }
