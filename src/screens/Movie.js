// @flow
import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  image: {
    bottom: 35,
    width: 500,
    height: 420,
  },
  conatiner: {
    alignItems: 'center',
  },
  text: {
    bottom: 35,
    marginVertical: 4,
    marginHorizontal: 5,
    color: '#000',
    fontSize: 16,
  },
  close: {
    top: 10,
    bottom: 10,
    zIndex: 1,
    right: 185,
    marginVertical: 0,
  },
  movieInfo: {
    bottom: 35,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#7d43d9',
  },
  ratingtext: {
    color: '#fff',
  },
  details: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default function Movie(props) {
  const {item} = props.route.params;
  console.log(item.backdrop_path);
  return (
    <>
      <View style={styles.conatiner}>
        <View style={styles.close}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="closecircle" color="#000" size={30} />
          </TouchableOpacity>
        </View>
        <SharedElement id={`item.${item.id}.poster`}>
          <Image source={{uri: item.poster}} style={styles.image} />
        </SharedElement>
        <SharedElement id={`item.${item.overview}.overview`}>
          <Text style={styles.text}>{item.overview}</Text>
        </SharedElement>
      </View>
      <View style={styles.movieInfo}>
        <View
          styles={{
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <AntDesign name="star" color="#fff" size={20} />
          </View>
          <View>
            <Text style={styles.ratingtext}>{item.vote_average}</Text>
          </View>
        </View>
        <View>
          <View>
            <FontAwesome name="language" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.ratingtext}>{item.original_language}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
