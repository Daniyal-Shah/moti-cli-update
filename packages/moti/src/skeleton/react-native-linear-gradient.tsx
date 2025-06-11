import { StyleSheet, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { View as MotiView } from '../components/view'
import { baseColors, defaultDarkColors, defaultLightColors } from './shared'
import type { MotiSkeletonProps } from './types'

type SkeletonProps = Omit<MotiSkeletonProps, 'Gradient'> & {
  style?: ViewStyle
}

export function Skeleton({
  children,
  colorMode = 'light',
  backgroundColor,
  colors,
  radius = 8,
  height = 32,
  width = 32,
  show,
  boxHeight,
  disableExitAnimation,
  transition,
  style,
  ...motiViewProps
}: SkeletonProps) {
  const defaultColors =
    colorMode === 'light' ? defaultLightColors : defaultDarkColors
  const gradientColors = colors || defaultColors

  return (
    <MotiView
      transition={transition}
      {...motiViewProps}
      style={[
        {
          overflow: 'hidden',
          height: boxHeight || height,
          minWidth: width,
          minHeight: height,
          borderRadius:
            radius === 'round' ? 999 : radius === 'square' ? 0 : radius,
          backgroundColor: backgroundColor || baseColors[colorMode].primary,
        },
        style,
      ]}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}
      >
        {children}
      </LinearGradient>
    </MotiView>
  )
}
