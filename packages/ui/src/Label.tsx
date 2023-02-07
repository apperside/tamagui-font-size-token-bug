import { styled, Text as TamaguiText } from 'tamagui'
import { isWeb } from '@tamagui/constants'
export const AppLabel = styled(
  TamaguiText,
  {
    color: '$textColor',
    whiteSpace: 'pre-line',
    variants: {
      type: {
        h1: {
          // fontFamily: '$semiBold',
          fontSize: '$extraLarge',
        },
        h2: {
          fontFamily: '$semiBold',
          // fontSize: '$larger',
        },
        body1: {
          fontFamily: '$semiBold',
        },
        body2: {
          fontFamily: '$medium',
        },
        bodyLarge: {
          fontFamily: '$medium',
        },
      },

      underlined: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      size: {
        mini: {
          fontSize: '$mini',
        },
        smallest: {
          fontSize: '$smallest',
        },
        smaller: {
          fontSize: '$smaller',
        },
        small: {
          fontSize: '$small',
        },
        regular: {
          fontSize: '$regular',
        },
        large: {
          fontSize: '$large',
        },
        larger: {
          fontSize: '$larger',
        },
        extraLarge: {
          fontSize: '$10',
        },
      },
    } as const,

    defaultVariants: {
      size: 'regular',
      type: 'body1',
    },
  },
  {
    defaultVariants: {
      size: 'regular',
      type: 'body1',
    },
    isReactNative: !isWeb,
  }
)

// also tried this way but didn't work either
// AppLabel.defaultProps = {
//   size: 'regular',
//   type: 'body1',
// }
