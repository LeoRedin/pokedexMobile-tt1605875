import * as React from 'react'
import { Platform, KeyboardAvoidingView, StatusBar, View, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { presets, offsets, isNonScrolling } from './presets'

const isIos = Platform.OS === 'ios'

function ScreenWithoutScrolling(props) {
  const insets = useSafeAreaInsets()
  const preset = presets.fixed
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
    >
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      <View style={[preset.inner, style, insetStyle]}>{props.children}</View>
    </KeyboardAvoidingView>
  )
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets()
  const preset = presets.scroll
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
    >
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
        >
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

function Screen(props) {
  console.log('🚀 ~ file: index.js ~ line 54 ~ Screen ~ props', props.preset)
  if (isNonScrolling(props.preset)) {
    console.log('aqui')
    return <ScreenWithoutScrolling {...props} />
  } else {
    console.log('aqui 2')
    return <ScreenWithScrolling {...props} />
  }
}

export { Screen }
