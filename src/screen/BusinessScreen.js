import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import useBusinessDetail from '../hooks/businessDetail';
import { FontAwesome } from '@expo/vector-icons';

const BusinessScreen = ({ navigation }) => {
  const [business, isLoading, errorMessage] = useBusinessDetail(navigation.getParam('id'));

  if (isLoading) {
    return (
      <View style={styles.fullscreenContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isLoading && errorMessage) {
    return (
      <View style={styles.fullscreenContainer}>
        <Text>{errorMessage}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>{ business.name }</Text>
      <Text style={styles.rating}>{ business.rating } stars, { business.review_count } reviews</Text>

      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={business.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
        keyExtractor={item => item}
      />      
      
      {business.display_phone
        ? <View style={styles.infoContainer}>
            <FontAwesome name='whatsapp' style={styles.icon} />
            <Text style={styles.infoText}>{business.display_phone}</Text>
          </View> : null}

      {business.location && business.location.display_address
        ? <View style={styles.infoContainer}>
            <FontAwesome name='map-marker' style={styles.icon} />
            <FlatList
              data={business.location.display_address}
              renderItem={({item}) => <Text style={styles.infoText}>{item}</Text>}
              keyExtractor={item => item}
              scrollEnabled={false}
            />
          </View> : null}

      {business.categories
        ? <Text style={styles.categories}>{business.categories.map(item => item.title).join(' / ')}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: undefined,
    aspectRatio: 100 / 75,
    borderRadius: 5,
    marginLeft: 15,
    marginVertical: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 15
  },
  rating: {
    fontSize: 16,
    color: '#7f8c8d',
    marginLeft: 15
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16
  },
  icon: {
    fontSize: 64,
    textAlign: 'center',
    width: 100,
    marginLeft: 15
  },
  categories: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginHorizontal: 15,
    marginTop: 20,
    textAlign: 'center'
  }
});

export default BusinessScreen;