import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Information = ({ icon, children }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} style={styles.icon} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    fontSize: 64,
    textAlign: 'center',
    width: 100,
    marginLeft: 15
  }
});

export default Information;
