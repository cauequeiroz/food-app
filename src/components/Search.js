import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

const Search = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather
        name='search'
        style={styles.icon}
      />
      <TextInput
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    margin: 15
  },
  input: {
    fontSize: 18,
    flex: 1
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default Search;