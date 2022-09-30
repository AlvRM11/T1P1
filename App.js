import { StyleSheet, View } from 'react-native';
import ContainerBottom from './components/ContainerBottom';
import ContainerTop from './components/ContainerTop';

export default App = () => {
  return (
    <View style={styles.container}>
      <ContainerTop />
      <ContainerBottom />
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
