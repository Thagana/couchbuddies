// @flow
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    height: 160,
    width: 130,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#7d43d9',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5

  },
  text: {
    fontSize: 10,
    padding: 2,
  },
  imageContainer: {
    marginVertical: 3,
    marginHorizontal: 6,
  },
  textContainer: {
    flexDirection: 'column',
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  lowerRow: {
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
  },
});

export default function Trending(props) {
  const {image, language, title, released, vote_average} = props;
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.row} colors={['#4c669f', '#3b5998', '#192f6a']}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {title ? title : 'No title available'}
            </Text>
          </View>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between"
          }}>
             <View>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Movie</Text>
             </View>
             <View style={{
               flexDirection: "row",
               justifyContent: "center"
             }}>
                  <View style={{
                    marginHorizontal: 1
                  }}>
                      <AntDesign name="star" size={20} color="gold" />
                  </View>
                  <View>
                      <Text style={{
                        color: '#fff'
                      }}>
                        {vote_average}
                      </Text>
                  </View>
             </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
