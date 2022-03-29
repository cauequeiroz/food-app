import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import useBusinesses from '../hooks/businesses';

import Search from '../components/Search';
import BusinessList from '../components/BusinessList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [businesses, searchBusinesses, errorMessage, isLoading ] = useBusinesses();  

  const filterBusinessByPrice = price => businesses.filter(business => business.price == price);

  return (
    <View style={styles.page}>
      <Search
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchBusinesses(term)}
      />

      {!isLoading && errorMessage
        ? <Text style={styles.errorMessage}>{errorMessage}</Text>
        : null}

      {isLoading
        ? <ActivityIndicator size="large" style={StyleSheet.absoluteFillObject} />
        : <ScrollView>
            <BusinessList
              title="Cost Effective"
              items={filterBusinessByPrice('$')}
            />
            <BusinessList
              title="Bit Pricer"
              items={filterBusinessByPrice('$$')}
            />
            <BusinessList
              title="Big Spender!"
              items={filterBusinessByPrice('$$$')}
            />
          </ScrollView>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    height: '100%'
  },
  errorMessage: {
    color: '#e74c3c',
    marginLeft: 15,
    marginBottom: 15
  }
});

export default SearchScreen;