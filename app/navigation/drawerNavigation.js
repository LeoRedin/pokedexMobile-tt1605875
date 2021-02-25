import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { SettingsStackNavigator } from './stackNavigator'
import { BottomTabNavigator } from './tabNavigator'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Configurações" component={SettingsStackNavigator} />
    </Drawer.Navigator>
  )
}

export { DrawerNavigator }
