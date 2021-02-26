import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

function Login({ makeLogin }) {
  return (
    <View style={styles.center}>
      <Text>Faça seu login abaixo</Text>
      <Button onPress={() => makeLogin(true)} title="Fazer login" />
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

export { Login }
