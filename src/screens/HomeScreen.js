// @flow
import React, {useEffect} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet, TextInput} from 'react-native';
import Movie from '../components/MovieItem';
import Snackbar from 'react-native-snackbar';
import Feather from 'react-native-vector-icons/Feather'
import {loadPopular, searchMovie} from '../configs/app';

const styles = StyleSheet.create({
  searchcontainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  searchbar: {
    width: '90%',
    marginHorizontal: 10
  },
  search: {
    height: 60, 
    borderColor: '#000', 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 20,
    backgroundColor: '#fff',
    elevation: 10,
    marginVertical: 10,
    width: '100%'
  },
  icon :{
    position: "absolute",
    right: 20,
    top: 30,
    elevation: 11
  }
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
        <View style={styles.searchbar}>
            <TextInput 
                style={styles.search}
                onChangeText={text => setSearch(text)}
                value={search}
                placeholder="Search for a movie"
                placeholderTextColor="#000"
            />
            <Feather name="search" color="#000" size={20} style={styles.icon}/>
        </View>
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
