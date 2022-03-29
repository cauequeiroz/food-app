import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

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

export default Search;