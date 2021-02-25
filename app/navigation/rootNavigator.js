import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './stackNavigator'

function RootNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export { RootNavigator }
