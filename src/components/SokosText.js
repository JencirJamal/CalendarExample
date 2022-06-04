import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SokosText() {
  return (
    <View style={styles.sectionContainer} >
      <Text>This is a custom React-native Text Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
});

export default SokosText;