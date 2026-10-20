import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    increment: () => void,
    decrement: () => void
}

const ComponentB = ({increment, decrement}: Props) => {
  return (
      <View style={ styles.container}>
            <TouchableOpacity style={styles.customBtn} onPress={increment}>
                <Text style={styles.customTxt}>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customBtn} onPress={decrement}>
                <Text style={styles.customTxt}>Decrease</Text>
            </TouchableOpacity>
        </View>
  )
}

export default ComponentB

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    customBtn: {
        backgroundColor: '#2320f3',
        borderRadius: 15,
    },
    customTxt: {
        fontSize: 20,
        color: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight: '500'
    }
})