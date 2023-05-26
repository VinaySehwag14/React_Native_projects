import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/UI/IconButton';

const Map = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  };

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const region = {
    latitude: initialLocation ? initialLocation.lat : 28.61332245835333,
    longitude: initialLocation ? initialLocation.lng : 77.22928279759516,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    if (initialLocation) {
      return;
    }
    // console.log(event.nativeEvent, 'this islate');
    const lat = event?.nativeEvent?.coordinate?.latitude;
    const lng = event?.nativeEvent?.coordinate?.longitude;
    // console.log(lat, 'this is lat');
    // console.log(lng, 'this is lng');

    // console.log(selectedLocation.lat);
    setSelectedLocation({ lat: lat, lng: lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked!',
        'You have to pick a locaiton (by tapping on the map) first!'
      );
      return;
    }

    navigation.navigate('AddPlace', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler, initialLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
