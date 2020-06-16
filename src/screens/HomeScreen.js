// @flow
import React from 'react';
import {View, Text, SafeAreaView, Platform, FlatList} from 'react-native';
import {SearchBar, Card, ListItem, Button, Icon} from 'react-native-elements';
import {getMovies} from '../functions/getMovies';
import Movie from '../components/MovieItem';

export default function HomeScreen() {
  const [search, setSearch] = React.useState('');
  const [movies, setMovies] = React.useState([]);

  const handleSearch = (val) => {
    getMovies(val.nativeEvent.text)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.Response === 'True') {
            setMovies(response.data.Search);
          } else {
            // key
          }
        } else {
          alert('Something went wrong');
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <SafeAreaView>
      <SearchBar
        style={{
          borderRadius: 30,
        }}
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        placeholder="Type Here..."
        onChangeText={(val) => setSearch(val)}
        onChange={(val) => handleSearch(val)}
        value={search}
      />
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Movie
            Title={item.Title}
            Year={item.Year}
            imdbID={item.imdbID}
            Type={item.Type}
            Poster={item.Poster}
          />
        )}
        keyExtractor={(item) => item.imdbID}
      />
    </SafeAreaView>
  );
}
