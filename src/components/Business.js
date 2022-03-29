import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

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

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  }, 
  image: {
    width: 250,
    height: undefined,
    aspectRatio: 100 / 75,
    borderRadius: 5,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  info: {
    color: '#7f8c8d'
  }
});

export default withNavigation(Business);