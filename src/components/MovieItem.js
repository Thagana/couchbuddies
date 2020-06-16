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
  mvText: {
    fontSize: 16,
    color: '#92eb34',
  },
  mvType: {
    color: '#92eb34',
    fontSize: 20,
  },
  mvInfo: {
    flexDirection: 'row',
    alignItems: 'center',
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
      <View style={styles.mvInfo}>
        <Text style={styles.mvType}>{`${Type}`}</Text>
        <Text style={styles.mvText}>{Year}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.addBtn}>
        <Antdesign name="hearto" size={20} color="#000" />
      </TouchableOpacity>
    </Card>
  );
}
