import { useCounterStore } from '@/store/counterStore';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    increment: () => void,
    decrement: () => void
}

const ComponentB = ( { increment, decrement }: Props ) => {
    const storeIncrement = useCounterStore( ( state ) => state.onIncrement );
    const storeDecrement = useCounterStore( ( state ) => state.onDecrement );
    
    return (
      <>
        <View style={ styles.container}>
            <TouchableOpacity style={styles.customBtn} onPress={increment}>
                <Text style={styles.customTxt}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customBtn} onPress={decrement}>
                <Text style={styles.customTxt}>Decrease</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
                <TouchableOpacity
                    style={[ styles.customBtn, { backgroundColor: 'red' } ]}
                    onPress={storeIncrement}>
                <Text style={styles.customTxt}>Increase</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[ styles.customBtn, { backgroundColor: 'red' } ]}
                    onPress={storeDecrement}>
                <Text style={styles.customTxt}>Decrease</Text>
            </TouchableOpacity>
        </View>
      </>
      
  )
}

export default ComponentB

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
        flexDirection: 'row',
        marginBottom: 10,
    },
    customBtn: {
        backgroundColor: '#2320f3',
        borderRadius: 10,
    },
    customTxt: {
        fontSize: 18,
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 8,
        fontWeight: '600'
    }
})