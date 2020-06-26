// @flow
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
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
  const {
    title,
    poster,
    appcon,
    id,
    adult,
    genre_ids,
    original_language,
    overview,
    original_title,
    popularity,
    release_date,
    vote_average,
    backdrop_path,
  } = props;
  const {navigation} = appcon;
  const onPress = () => {
    const item = {
      poster: `${POSTER_BASE}/w500/${poster}`,
      title,
      id,
      adult,
      genre_ids,
      original_language,
      overview,
      original_title,
      popularity,
      release_date,
      vote_average,
      backdrop_path: `${POSTER_BASE}${backdrop_path}`,
    };
    navigation.navigate('Movie', {item});
  };
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
