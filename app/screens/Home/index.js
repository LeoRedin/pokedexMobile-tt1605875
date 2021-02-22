import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Screen } from '../../components'
import { Container } from './styles'

function Home() {
  const navigation = useNavigation()

  const handlePress = () => navigation.navigate('pokemon')

  return (
    <Container>
      <Screen preset="scroll">
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Text>BEM VINDO À SUPER POKÉDEX</Text>
        <Button title="Pokemon" onPress={handlePress}></Button>
      </Screen>
    </Container>
  )
}

export { Home }
