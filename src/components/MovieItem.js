import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import Antdesign from 'react-native-vector-icons/AntDesign';
import {POSTER_BASE} from '../config';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    borderRadius: 50,
    flex: 1,
    width: 320,
    height: 500,
  },
});

export default function MovieItem(props) {
  const {title, poster} = props;
  const onPress = () => {};
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: `${POSTER_BASE}/w500/${poster}`}}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}
