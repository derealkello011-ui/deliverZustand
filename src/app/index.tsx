import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";
import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [ count, setCount ] = useState( 0 );
  
  const handleIncrement = () => { setCount( count => count + 1 ) }
  const handleDecrement = () => {
    count - 1 >= 0 ? setCount( count => count - 1 ) : setCount( count => count );
  }

  return (
    <ScrollView style={styles.container}>
      
      <SafeAreaView edges={[ 'bottom', 'left', 'right', 'top' ]}>
        <View style={styles.odogu}>
          <View style={styles.content}>
          <Text style={ styles.textStyle}>Links</Text>
            <Link href='/screens/Home'>
            <Text style={ styles.links}>Home</Text>
            </Link>
          </View>
          <View style={styles.zustandContainer}>
            <ComponentA count={count}/>
            <ComponentB increment={handleIncrement} decrement={handleDecrement}/>
          </View>
        </View>
        
      </SafeAreaView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  odogu: {
    padding: 20,
    gap: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    borderRadius: 15,
  },
  container: {
    flex: 1
  },
  content: {
    padding: 15,
    gap: 10,
    backgroundColor: '#cac5c5',
    marginHorizontal: 10,
    borderRadius: 15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
  links: {
    color: 'blue',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginLeft: 10,
  },
  zustandContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  }
});
