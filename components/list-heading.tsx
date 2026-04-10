import { Text, TouchableOpacity, View } from 'react-native'

export default function ListHeading({ title }: ListHeadingProps) {
  return (
    <View className='list-head'>
      <Text className='list-title'>{title}</Text>

      <TouchableOpacity className='list-action'>
        <Text className='list-action-text'>View all</Text>
      </TouchableOpacity>
    </View>
  )
}