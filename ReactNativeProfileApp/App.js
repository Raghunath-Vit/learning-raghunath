import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { UserProfile} from './components/UserProfile';
import { PlatformCheck } from './components/PlatformCheck';

export default function App() {
  return (
    <View style={{flex:1, justifyContent:"center", padding:40}}>
      <UserProfile fullName="Aayush Singh"/>
      <PlatformCheck />
    </View>
  );
}
