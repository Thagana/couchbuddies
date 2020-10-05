// @flow
import React, {useEffect} from 'react';
import { View, FlatList, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import {loadPopular, searchMovie} from '../configs/app';
import {POSTER_BASE} from '../configs/app';

const styles = StyleSheet.create({
  searchcontainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  searchbar: {
    width: '90%',
    marginHorizontal: 10,
  },
  search: {
    height: 60, 
    borderColor: '#fff', 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 20,
    backgroundColor: '#fff',
    elevation: 10,
    marginVertical: 10,
    width: '100%',
    color: '#000'
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
    margin: 2
  },
  ImageBg: {
    flex: 1
  },
  descContainer: {
    flex: 1,
    padding: 10,
    marginTop: 30
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rating: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  titleText: {
    color: '#fff',
    fontSize: 25
  },
  overviewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  overviewText: {
    color: '#fff',
    padding: 2
  }
});



export default function HomeScreen(props) {
  const [search, setSearch] = React.useState('');
  const [movielist, setMovieList] = React.useState([]);
  const [description, setDescription] = React.useState({ uri: 'http://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg', name: '' });
  const carouselRef = React.useRef();

  const handleSearch = (val) => {
    console.log(val);
    searchMovie(val.nativeEvent.text)
      .then((response) => {
        setMovieList(response);
      })
      .catch((error) => {
       console.log(error)
      });
  };

  useEffect(() => {
    loadPopular()
      .then((response) => {
        setMovieList(response);
      })
      .catch((error) => {
       console.log(error);
      });
  }, []);

  const searchFocusF = () => {
    loadPopular()
      .then((res) => {
        setMovieList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const renderItem = ({ item, index }) => {
    return (
        <TouchableOpacity onPress={() => {
          setDescription({
            uri: `${POSTER_BASE}/w500/${item.poster_path}`,
            name: item.title,
            overview: item.overview,
            rating: item.vote_average
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

        <ImageBackground
          source={{  uri: description.uri }}
          style={styles.ImageBg}
        >
          <View style={styles.searchcontainer}>
            <View style={styles.searchbar}>
                <TextInput 
                    style={styles.search}
                    onChangeText={text => setSearch(text)}
                    value={search}
                    placeholder="Search for a movie"
                    placeholderTextColor="#000"
                    onChange={handleSearch}
                />
                  <Feather name="search" color="#000" size={30} style={styles.icon}/>
            </View>
          </View>
          <View style={styles.descContainer}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{description.name}</Text>
              </View>
            <View style={styles.rating}>
              <Text style={styles.titleText}>{description.rating} </Text><
                Text style={{
                fontSize: 10, color: '#fff', top: 6
              }}>/ 10</Text>
            </View>
          </View>
          <View style={styles.carouselContainer}>
              <FlatList
                  data={movielist.results}
                  horizontal={true}
                  renderItem={renderItem}
                  keyExtractor={(item,index) => index.toString()}
              />
          </View>
          <View style={styles.overviewContainer}>
            <View>
              <Text style={styles.overviewText}>
                  {description.overview}
              </Text>
            </View>
          </View>
        </ImageBackground>
  );
}
