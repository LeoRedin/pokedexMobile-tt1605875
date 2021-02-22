import * as React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Pokemon() {
  const { navigate } = useNavigation()

  const handlePress = () => navigate('home')

  return (
    <View>
      <Text>Tela de um Pokemon qualquer</Text>
      <Button onPress={handlePress} title="Navegar para home" />
    </View>
  )
}

export { Pokemon }
