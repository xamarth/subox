import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function SignIn() {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up" className="">
        Create an Account
      </Link>
      <Link href="/">Home</Link>
    </View>
  )
}