import * as React from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainNavigator } from './mainNavigator'

const Stack = createStackNavigator()

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="mainStack" component={MainNavigator} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export { RootNavigator }
