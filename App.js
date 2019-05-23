import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from './components/List/List';
import PlacesInput from './components/PlacesInput/PlacesInput';

export default class App extends React.Component {
  state = { places: [] };

  addPlace = place => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(place)
      };
    });
  };

  render() {
    const { places } = this.state;
    return (
      <View style={styles.container}>
        <PlacesInput addPlace={this.addPlace} />
        <List places={places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listContainer: {
    width: '100%'
  }
});
