import { StyleSheet, View } from 'react-native';

const ContainerTop = () => {
  return (
    <View style= {styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#000'
    },
  });

export default ContainerTop;