import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Row person={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10
  },
});
