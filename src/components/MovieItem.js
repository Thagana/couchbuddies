import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import Antdesign from 'react-native-vector-icons/AntDesign';
const styles = StyleSheet.create({
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
export default function MovieItem(props) {
  const {Title, Poster, Year, Type, imdbID} = props;
  const onPress = () => {};
  return (
    <Card
      title={Title}
      image={{
        uri: Poster,
      }}>
      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.addBtn}>
        <Antdesign name="hearto" size={20} color="#000" />
      </TouchableOpacity>
    </Card>
  );
}
