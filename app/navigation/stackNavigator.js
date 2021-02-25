import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, About, Notifications, Settings } from '../screens'

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Voltar',
  headerTitleAlign: 'center',
}

function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sobre" component={About} />
    </Stack.Navigator>
  )
}

function NotificationsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Notificações" component={Notifications} />
    </Stack.Navigator>
  )
}

function SettingsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Configurações" component={Settings} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, NotificationsStackNavigator, SettingsStackNavigator }
