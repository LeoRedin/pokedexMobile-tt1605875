import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator } from './drawerNavigation'
import { AuthenticationStackNavigator } from './stackNavigator'

function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <AuthenticationStackNavigator login={setIsAuthenticated} />
      </NavigationContainer>
    )
  }
}

export { RootNavigator }
