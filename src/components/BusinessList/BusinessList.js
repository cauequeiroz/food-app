import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import Business from '../Business';

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

export default BusinessList;