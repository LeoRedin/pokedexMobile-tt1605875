import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

function Notifications() {
  return (
    <View style={styles.center}>
      <Text>Essa é a Notifications screen</Text>
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

export { Notifications }
