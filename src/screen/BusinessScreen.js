import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import useBusinessDetail from '../hooks/businessDetail';
import Information from '../components/Information';

const BusinessScreen = ({ navigation }) => {
  const [business, isLoading, errorMessage] = useBusinessDetail(navigation.getParam('id'));

  const getCategoriesAsString = () => business.categories.map(item => item.title).join(' / ');

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
      <Text style={styles.title}>
        { business.name }
      </Text>

      <Text style={styles.rating}>
        { business.rating } stars, { business.review_count } reviews
      </Text>

      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={business.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
        keyExtractor={item => item}
      />      
      
      {business.display_phone
        ? <Information icon="whatsapp">
            <Text style={styles.infoText}>
              {business.display_phone}
            </Text>
          </Information> : null}

      {business.location && business.location.display_address
        ? <Information icon="map-marker">
            <FlatList
              data={business.location.display_address}
              renderItem={({item}) => <Text style={styles.infoText}>{item}</Text>}
              keyExtractor={item => item}
              scrollEnabled={false}
            />
          </Information> : null}

      {business.categories
        ? <Text style={styles.categories}>
            {getCategoriesAsString()}
          </Text> : null}
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
  infoText: {
    fontSize: 16
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