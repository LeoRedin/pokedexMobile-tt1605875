import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator } from './drawerNavigation'

function RootNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export { RootNavigator }
