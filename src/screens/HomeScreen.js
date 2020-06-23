// @flow
import React, {useEffect} from 'react';
import {View, SafeAreaView, Platform, FlatList, StyleSheet} from 'react-native';
import {SearchBar, Card, ListItem, Button, Icon} from 'react-native-elements';
import {getMovies} from '../functions/getMovies';
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

export default function HomeScreen() {
  const [search, setSearch] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [movielist, setMovieList] = React.useState([]);

  const handleSearch = (val) => {
    // getMovies(val.nativeEvent.text)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       if (response.data.Response === 'True') {
    //         setMovies(response.data.Search);
    //       } else {
    //         // key
    //       }
    //     } else {
    //       Snackbar.show({
    //         text: 'Something went wrong',
    //         duration: Snackbar.LENGTH_SHORT,
    //       });
    //     }
    //   })
    //   .catch((error) => console.log(error));
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
          <Movie poster={item.poster_path} title={item.title} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
