import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Onboarding() {
  return (
    <View accessible={true} accessibilityLabel="Onboarding Screen">
      <Text accessibilityRole='header'>Onboarding</Text>
      <Link href="/" accessibilityLabel='Navigate to home screen' accessibilityRole='button'>Home</Link>
    </View>
  )
}
