import { Link, Redirect } from 'expo-router'
import { Text, View } from 'react-native'

export default function SignIn() {
  if (!false) {
    return (
      <Redirect href="/" />
    )
  }
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