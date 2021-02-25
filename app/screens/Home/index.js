import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

function Home({ navigation }) {
  return (
    <View style={styles.center}>
      <Text>Essa é a home screen</Text>
      <Button onPress={() => navigation.navigate('Sobre')} title="Ir para a página Sobre" />
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

export { Home }
