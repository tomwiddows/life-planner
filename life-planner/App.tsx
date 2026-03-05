import { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { supabase } from './lib/supabase'

type Aim = {
  id: number
  aim: string
}

export default function App() {
  const [aims, setAims] = useState<Aim[]>([])

  useEffect(() => {
    getAims()
  }, [])

  async function getAims() {
    const { data } = await supabase.from('aims').select()
    if (data) setAims(data)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={aims}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.aim}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})