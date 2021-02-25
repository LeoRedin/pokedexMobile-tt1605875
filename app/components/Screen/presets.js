import { isNil } from 'ramda'

const offsets = {
  none: 0,
}

const presets = {
  fixed: {
    outer: {
      backgroundColor: '#fff',
      flex: 1,
      height: '100%',
    },
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    },
  },
  scroll: {
    outer: {
      backgroundColor: '#fff',
      flex: 1,
      height: '100%',
    },
    inner: { justifyContent: 'flex-start', alignItems: 'stretch' },
  },
}

function isNonScrolling(preset) {
  return isNil(preset) || !preset.length || isNil(presets[preset]) || preset === 'fixed'
}

export { offsets, presets, isNonScrolling }
