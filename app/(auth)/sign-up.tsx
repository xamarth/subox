import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function SignUp() {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in" accessibilityLabel='Go To Sign-In Page'>
        <Text>
          Sign In
        </Text>
      </Link>
      <Link href="/" accessibilityLabel='Go To Home Page'>
        <Text>
          Home
        </Text>
      </Link>
    </View>
  )
}