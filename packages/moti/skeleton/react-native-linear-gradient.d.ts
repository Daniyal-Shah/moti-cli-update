import { ViewStyle } from 'react-native'
import { MotiSkeletonProps } from '../src/skeleton/types'

export type SkeletonProps = Omit<MotiSkeletonProps, 'Gradient'> & {
  style?: ViewStyle
}

export function Skeleton(props: SkeletonProps): JSX.Element
