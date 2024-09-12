import {View,TextInput,Text} from "react-native";
import { styler } from "./Input.style";

export function Input({defaultValue,onChange,unit}){
  return(
    <View style={styler.root}>
      <TextInput 
        placeholder="Enter Temperature"
        style={styler.input}
        defaultValue={defaultValue.toString()}
        maxLength={3}
        onChangeText={(text)=>{
          onChange(text);
        }}
      />
      <Text style={styler.unit}>{unit}</Text>
    </View>
  );
}