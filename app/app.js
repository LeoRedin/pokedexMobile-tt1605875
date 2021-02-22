/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { RootNavigator } from './navigation'

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigator />
    </SafeAreaProvider>
  )
}

export default App
