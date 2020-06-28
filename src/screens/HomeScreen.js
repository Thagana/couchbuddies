// @flow
import React, {useEffect} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Movie from '../components/MovieItem';
import Snackbar from 'react-native-snackbar';
import {loadPopular, searchMovie} from '../configs/app';

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  searchcontainer: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 10,
  },
});

export default function HomeScreen(props) {
  const [search, setSearch] = React.useState('');
  const [movielist, setMovieList] = React.useState([]);
  const handleSearch = (val) => {
    searchMovie(val.nativeEvent.text)
      .then((response) => {
        setMovieList(response);
      })
      .catch((error) => {
        Snackbar.show({
          text: 'Could not get movies',
          duration: Snackbar.LENGTH_SHORT,
        });
      });
  };

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

  const searchFocusF = () => {
    loadPopular()
      .then((res) => {
        setMovieList(res);
      })
      .catch((error) => {
        Snackbar.show({
          text: 'Could not get movies',
          duration: Snackbar.LENGTH_SHORT,
        });
      });
  };
  return (
    <SafeAreaView>
      <View style={styles.searchcontainer}>
        <SearchBar
          style={styles.searchbar}
          round
          lightTheme
          placeholderTextColor="#7d43d9"
          placeholder="Couch mode ..."
          onChangeText={(val) => setSearch(val)}
          onChange={(val) => handleSearch(val)}
          value={search}
          onCancel={searchFocusF}
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
