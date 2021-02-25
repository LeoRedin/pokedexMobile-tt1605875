import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, About } from '../screens'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Voltar',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sobre" component={About} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator }
