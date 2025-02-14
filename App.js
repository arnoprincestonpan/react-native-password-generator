import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { useState, useMemo } from 'react';

export default function App() {

  const [password, setNewPassword] = useState("");
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [symbolAllowed, setSymbolAllowed] = useState(true);


  const Separator = () => <View style={styles.separator}/>

  return (
    <SafeAreaProvider style={{backgroundColor: "lightyellow"}}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            Password Generator
          </Text>
        </View>
        <Separator/>
        <View style={{flexDirection : "row", justifyContent: "space-between", alignContent: "center"}}>
          <View style={{flexDirection: "column"}}>
            <Text style={styles.label} nativeID="password">
              Password
            </Text>
            <TextInput
            style={styles.text}
            accessibilityLabel="text"
            accessibilityLabelledBy="password"
            placeholder="Password"
            value={password}
            readOnly
            
            />
          </View>
          <Button
          style={{border: "1px"}}
          title="Copy"
          color="brown"
          accessibilityLabel='Press to Copy Password to ClipBoard'
          />
        </View>
        <Separator/>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Slider
            style={{width: "70%"}}
            minimumValue={12}
            maximumValue={64}
            minimumTrackTintColor={"orange"}
            maximumTrackTintColor={"brown"}
          />
          <Text style={{fontSize: 24, paddingHorizontal: "10%"}}>
            #
          </Text>
        </View>
        <View style={{paddingHorizontal: "5%", flexDirection: "row", justifyContent: "space-between"}}>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title:{
    textAlign: 'center',
    marginVertical: 8,
    color: "brown",
    fontSize: 32,
    fontWeight: 500,
  }, 
  label: {
    fontSize: 16,
    fontWeight: 300,
  },
  text: {
    fontSize: 24,
    fontWeight: 300,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})