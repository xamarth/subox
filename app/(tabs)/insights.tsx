import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function Insights() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background p-5'>
      <Text>insights</Text>
      <Link href="/">Home</Link>
    </SafeAreaView>
  )
}
