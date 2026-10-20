import { StyleSheet, Text, View } from 'react-native'

interface Props {
    count: number
}

const ComponentA = ({count}: Props) => {
  return (
    <View style={styles.container}>
          <Text style={{fontSize: 50, fontWeight: '700', color:'#000'}}>{count}</Text>
    </View>
  )
}

export default ComponentA

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})