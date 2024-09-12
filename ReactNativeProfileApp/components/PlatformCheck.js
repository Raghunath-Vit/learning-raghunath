import { Platform, View, Pressable, Text} from 'react-native';

export const PlatformCheck=()=>{
  const showPlatform=()=>{
    alert(platform.OS);
  };
  return (
    <View>
      {Platform.OS=="android" && <Text>This is Android</Text>}
      {Platform.OS=="ios" && <Text>This is Android</Text>}
      <Pressable onPress={showPlatform}>
        <Text>Find Platform</Text>
      </Pressable>
    </View>
  );
};