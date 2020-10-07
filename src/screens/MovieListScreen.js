// @flow
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Trending from '../components/Trending';

const animationData = require('../../assets/animation/loading.json');

import {API_KEY, POSTER_BASE} from '../configs/app';

const styles = StyleSheet.create({
  trending: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7d43d9',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default function MovieListScreen() {
  const [movies, setMovies] = useState(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <View>
      <View>
        <Text style={styles.trending}>Trending</Text>
      </View>
      {movies ? (
        <FlatList
          data={movies.results}
          renderItem={({item}) => (
            <Trending
              image={`${POSTER_BASE}/w500${item.poster_path}`}
              description={item.overview}
              title={item.title}
              released={item.release_date}
              language={item.original_language}
              vote_average={item.vote_average}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center"
        }}>
          <Text>Loading ...</Text>
        </View>
      )}
    </View>
  );
}
