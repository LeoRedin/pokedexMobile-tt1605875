import * as React from 'react'
import { View } from 'react-native'

import { presets } from './styles'

function Space({ preset }) {
  return (
    <View
      style={{
        marginVertical: presets[preset] || presets.medium,
      }}
    />
  )
}

export { Space }
