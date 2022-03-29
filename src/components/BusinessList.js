import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Business from './Business';

const BusinessList = ({ title, items }) => {
  if (items.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        { title }
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({item}) => {
          return <Business detail={item} />
        }}
        keyExtractor={item => item.id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },  
  title: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default BusinessList;