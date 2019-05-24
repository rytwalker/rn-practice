import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from './components/List/List';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import PlacesInput from './components/PlacesInput/PlacesInput';
import placeImage from './assets/nyc.jpg';

export default class App extends React.Component {
  state = { places: [], currentKey: 0, selectedPlace: null };

  addPlace = place => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          place,
          key: prevState.currentKey.toString(),
          image: placeImage
        }),
        currentKey: (prevState.currentKey += 1)
      };
    });
  };

  selectPlace = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  deletePlace = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(
          place => place.key !== prevState.selectedPlace.key
        ),
        selectedPlace: null
      };
    });
  };

  closeModal = () => this.setState({ selectedPlace: null });

  render() {
    const { places, selectedPlace } = this.state;
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          closeModal={this.closeModal}
          deletePlace={this.deletePlace}
        />
        <PlacesInput addPlace={this.addPlace} />
        <List places={places} onItemselected={this.selectPlace} />
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
