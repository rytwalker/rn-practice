import React from 'react';
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native';

const PlaceDetail = ({ closeModal, deletePlace, selectedPlace }) => {
  return (
    <Modal
      onRequestClose={closeModal}
      visible={selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {selectedPlace && (
          <View>
            <Image style={styles.placeImage} source={selectedPlace.image} />
            <Text style={styles.placeName}>{selectedPlace.place}</Text>
          </View>
        )}
        <View>
          <Button title="Delete" color="red" onPress={deletePlace} />
          <Button title="Close" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 100
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

export default PlaceDetail;
