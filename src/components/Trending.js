// @flow
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

type Props = {
  image: String,
  description: String,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 10,
    marginHorizontal: 10,
  },
  imageContainer: {
    marginVertical: 3,
    marginHorizontal: 6,
  },
  textContainer: {
    paddingRight: 10,
  },
});
export default function Trending(props: Props) {
  const {image, description} = props;
  console.log(image);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    </View>
  );
}
