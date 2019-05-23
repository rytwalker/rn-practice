import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

class PlacesInput extends Component {
  state = { placeName: '' };

  handleInputChange = value => this.setState({ placeName: value });

  handlePress = () => {
    const { placeName } = this.state;
    const { addPlace } = this.props;
    if (placeName.trim() === '') {
      return;
    }
    addPlace(placeName);
    this.setState({ placeName: '' });
  };

  render() {
    const { placeName } = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={placeName}
          onChangeText={this.handleInputChange}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default PlacesInput;
