import { Pressable, Text, View, Image, Linking } from "react-native";
import { styler } from "./userprofile.style";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function UserProfile({fullName}){
  const socialCall=()=>{
    alert("Social Called!");
    Linking.openURL("https://linkedin.com");
  };
  return (
    <View style={styler.container}>
      <View style={styler.header}>
        <Image style={styler.profileImg} source={{uri:"https://i.pravatar.cc/300"}} />
      </View>
      <View style={styler.name}>
        <Text>{fullName}</Text>
      </View>
      <View style={styler.texts}>
        <Text>I am a Flutter Developer and i stay in chicago</Text>
      </View>
      <Pressable>
        <Text>Click Me!</Text>
      </Pressable>
      <View style={styler.social}>
        <Pressable onPress={socialCall} style={styler.socialBtn}>
          <FontAwesome6 name="twitter" size={24} color="black" />
        </Pressable>
        <Pressable onPress={socialCall} style={styler.socialBtn}>
          <FontAwesome name="linkedin" size={24} color="black" />
        </Pressable>
        <Pressable style={styler.socialBtn}>
          <FontAwesome name="facebook-square" size={24} color="black" />
        </Pressable>
        <Pressable style={styler.socialBtn}>
          <FontAwesome name="github" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};