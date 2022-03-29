import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const Business = ({ detail, navigation }) => {
  if (!detail.image_url) return null;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Business', { id: detail.id })}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: detail.image_url }}      
        />

        <Text style={styles.title}>
          { detail.name }
        </Text>
        
        <Text style={styles.info}>
          { detail.rating } stars, { detail.review_count } reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(Business);