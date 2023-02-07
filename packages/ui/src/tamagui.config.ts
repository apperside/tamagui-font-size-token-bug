import { createFont, createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/theme-base'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from './animations'
const fontSizes = {
  mini: 6,
  smallest: 8,
  smaller: 10,
  small: 12,
  regular: 14,
  large: 16,
  larger: 20,
  extraLarge: 45,
  //without adding atleast one entry with a number format, it gives a typescript error
  '1': 6,
}

const createAppFont = (familyName: string) => {
  return createInterFont(
    {
      family: familyName,
      size: fontSizes,
    },
    {
      sizeSize: (size) => Math.round(size * 1.1),
      sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
    }
  )
}
// const headingFont = createInterFont({})
const semiBold = createAppFont('SourceSansPro-SemiBold')
const regular = createAppFont('SourceSansPro-Regular')
const medium = createAppFont('SourceSansPro-SemiBold')
const light = createAppFont('SourceSansPro-Regular')

export const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: semiBold,
    body: regular,
    // regular: bodyFont,
    semiBold,
    regular,
    medium,
    light,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
