// @flow
import React, {useEffect} from 'react';
import {View, SafeAreaView, Platform, FlatList, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Movie from '../components/MovieItem';
import Snackbar from 'react-native-snackbar';
import {loadPopular} from '../config';

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 50,
  },
  searchcontainer: {
    borderRadius: 50,
    marginHorizontal: 4,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default function HomeScreen(props) {
  const [search, setSearch] = React.useState('');
  const [movielist, setMovieList] = React.useState([]);
  const handleSearch = (val) => {};

  useEffect(() => {
    loadPopular()
      .then((response) => {
        console.log(response);
        setMovieList(response);
      })
      .catch((error) => {
        Snackbar.show({
          text: 'Could not get movies',
          duration: Snackbar.LENGTH_SHORT,
        });
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.searchcontainer}>
        <SearchBar
          style={styles.searchbar}
          round
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          placeholder="Couch mode ..."
          onChangeText={(val) => setSearch(val)}
          onChange={(val) => handleSearch(val)}
          value={search}
        />
      </View>
      <FlatList
        data={movielist.results}
        renderItem={({item}) => (
          <Movie
            poster={item.poster_path}
            title={item.title}
            appcon={props}
            id={item.id}
            adult={item.adult}
            genre_ids={item.genre_ids}
            original_language={item.original_language}
            overview={item.overview}
            original_title={item.original_title}
            popularity={item.popularity}
            release_date={item.release_date}
            vote_average={item.vote_average}
            backdrop_path={item.backdrop_path}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
