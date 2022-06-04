import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function CustomText() {
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
});

export default CustomText;