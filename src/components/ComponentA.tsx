import { useCounterStore } from '@/store/counterStore'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    count: number
}

const ComponentA = ( { count }: Props ) => {
    const storeCount = useCounterStore((state) => state.count)
  return (
    <View style={styles.container}>
          <View style={styles.viewStyle}>
              <Text style={[styles.innerText, {color: 'blue'}]}>
                  useState: 
              </Text>
              
              <Text
                style={styles.buttonText}>
                    {count}
              </Text>
          </View>
          
          <View style={styles.viewStyle}>
              <Text style={[styles.innerText, {color: 'red'}]}>
                  Zustand: 
              </Text>
              <Text
                style={styles.buttonText}>
                    {storeCount}
          </Text>
          </View>
          
    </View>
  )
}

export default ComponentA

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d7d7d7',
        marginBottom: 20,
        borderRadius: 20,
        margin: 10
    },
    buttonText: {
        fontSize: 50,
        fontWeight: '700',
        color: '#000',
        marginVertical: 10
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 20,
        alignItems: 'stretch',

    },
    innerText: {
        fontWeight: '600',
        fontSize: 15,
        justifyContent: 'center',
    }
})