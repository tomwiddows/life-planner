import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'

export default function Account({ session }: { session: Session }) {
  return (
    <View>
      <Text>Logged in as: {session.user.email}</Text>
    </View>
  )
}