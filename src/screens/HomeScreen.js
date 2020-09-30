// @flow
import React, {useEffect} from 'react';
import {View, ScrollView, Dimensions, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Text} from 'react-native';
import Movie from '../components/MovieItem';
import Snackbar from 'react-native-snackbar';
import Carousel from 'react-native-anchor-carousel';
import Feather from 'react-native-vector-icons/Feather'
import {loadPopular, searchMovie} from '../configs/app';

import {POSTER_BASE} from '../configs/app';
import { round } from 'react-native-reanimated';


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
    borderColor: '#fff', 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 20,
    backgroundColor: 'transparent',
    elevation: 10,
    marginVertical: 10,
    width: '100%'
  },
  icon :{
    position: "absolute",
    right: 20,
    top: 25,
    elevation: 11
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 10
  },
  carousel: {
    padding: 20
  },
  image: {
    borderRadius: 10,
    width: 220,
    height: 300,
  },
  ImageBg: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center"
  },
  descContainer: {
    flex: 1,
    padding: 10,
    marginTop: 30
  },
  title: {
    flexDirection: "row",
    justifyContent: "center"
  },
  titleText: {
    color: '#fff',
    fontSize: 25
  }
});


const { width } = Dimensions.get('window');

export default function HomeScreen(props) {
  const [search, setSearch] = React.useState('');
  const [movielist, setMovieList] = React.useState([]);
  const [description, setDescription] = React.useState({ uri: 'https://avatars1.githubusercontent.com/u/31548358?s=400&u=3c136ffca7b76111e7aa057ec5167718b6f75b25&v=4', name: '' });
  const carouselRef = React.useRef();

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
  const renderItem = ({ item, index }) => {
    return (
        <TouchableOpacity onPress={() => {
          carouselRef.current.scrollToIndex(index)
          setDescription({
            uri: `${POSTER_BASE}/w500/${item.poster_path}`,
            name: item.title
          })
        }}>
          <Image
            source={{uri: `${POSTER_BASE}/w500/${item.poster_path}`}}
            style={styles.image}
          />
        </TouchableOpacity>
    );
  }
  return (
    <ScrollView
    >
      <ImageBackground
        source={{  uri: description.uri }}
        style={styles.ImageBg}
        blurRadius={2}
        imageStyle={{
          resizeMode: "cover",
          alignSelf: "flex-end"
        }}
      >
        <View style={styles.searchcontainer}>
          <View style={styles.searchbar}>
              <TextInput 
                  style={styles.search}
                  onChangeText={text => setSearch(text)}
                  value={search}
                  placeholder="Search for a movie"
                  placeholderTextColor="#fff"
              />
              <Feather name="search" color="#fff" size={30} style={styles.icon}/>
          </View>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{description.name}</Text>
          </View>
        </View>
        <View style={styles.carouselContainer}>
            <Carousel
                  style={styles.carousel}
                  data={movielist.results}
                  renderItem={renderItem}
                  itemWidth={200}
                  containerWidth={width - 20} 
                  separatorWidth={0}
                  ref={carouselRef}
                  pagingEnable={false}
                  minScrollDistance={20}
              />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
