import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Types work
import { TestType } from "../common/TestType";
const me: TestType = {
  id: 1,
  email: "asdf",
}

// Enums don't - comment these lines out and watch the app build fine
import { TestEnum } from "../common/TestEnum";
const thing:TestEnum = TestEnum.One;


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
