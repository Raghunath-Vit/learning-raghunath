import HotBackground from "./assets/hot.png";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import { DisplayTemperature } from './components/DisplayTemperature/DisplayTemperature';
import { Input } from "./components/Input";
import { Button } from "react-native-web";

export default function App() {
  const [inputvalue, setInputValue] = useState(34);
  const [currentUnit, setCurrentUnit] = useState("0C");

  const toggle = () => {
    if (currentUnit === "0C") {
      let fahrenheit = Math.round((inputvalue * 9/5) + 32);  
      setInputValue(fahrenheit);
      setCurrentUnit("0F");
    } else {
      let celsius = Math.round((inputvalue - 32) * 5/9); 
      setInputValue(celsius);
      setCurrentUnit("0C");
    }
  };

  return (
    <ImageBackground style={styles.backgroundImg} source={HotBackground}>
      <View style={styles.root}>
        <View style={styles.workspace}>
          <DisplayTemperature unit={currentUnit} temperature={inputvalue} />
          <Text>Temperature</Text>
          <Input defaultValue={2} onChange={setInputValue} unit={currentUnit} />
        </View>
        <Button onPress={toggle} title="Convert" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  workspace: {
    height: 450,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  backgroundImg: {
    height: "100%",
  },
});
