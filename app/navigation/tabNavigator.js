import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainStackNavigator, NotificationsStackNavigator } from './stackNavigator'

const Tab = createBottomTabNavigator()

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Notificações" component={NotificationsStackNavigator} />
    </Tab.Navigator>
  )
}

export { BottomTabNavigator }
