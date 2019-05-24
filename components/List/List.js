import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const List = ({ onItemselected, places }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={({ item }) => (
        <ListItem
          placeName={item.place}
          placeImage={item.image}
          handlePress={() => onItemselected(item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default List;
