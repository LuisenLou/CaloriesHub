import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Route from './src/routes/Route';

export default function App() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Route/>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


