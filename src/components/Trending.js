// @flow
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-elements';

type Props = {
  image: String,
  description: String,
  released: string,
  title: string,
  language: string,
  vote_average: Number,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    paddingRight: 10,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
export default function Trending(props: Props) {
  const {image, language, title, released, vote_average} = props;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {title ? title : 'No title available'}
            </Text>
          </View>
          <View style={styles.lowerRow}>
            <Text style={styles.text}>
              {released ? released : 'no release date'}
            </Text>
            <Text style={styles.text}>|</Text>
            <Text style={styles.text}>
              {language ? language : 'no language found'}
            </Text>
          </View>
          <View>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              readonly
              startingValue={vote_average / 2}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

{
  /* <View style={styles.container}>
<View style={styles.row}>
  <View style={styles.imageContainer}>
    <Image source={{uri: image}} style={styles.image} />
  </View>
  <View style={styles.textContainer}>
    <Text style={styles.text}>{description}</Text>
  </View>
</View>
</View> */
}
