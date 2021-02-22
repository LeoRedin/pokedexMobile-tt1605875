import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Pokemon } from '../screens'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="pokemon" component={Pokemon} />
    </Stack.Navigator>
  )
}

export { MainNavigator }
