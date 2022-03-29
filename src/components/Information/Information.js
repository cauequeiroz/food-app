import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const Information = ({ icon, children }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} style={styles.icon} />
      {children}
    </View>
  );
};

export default Information;
