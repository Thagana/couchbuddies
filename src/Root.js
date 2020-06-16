// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import MovieListScreen from './screens/MovieListScreen';
import ProfileScreen from './screens/ProfileScreen';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="CouchBuddies" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const MovieStack = createStackNavigator();
const MovieStackScreen = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="Movie List" component={MovieListScreen} />
    </MovieStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

const TabNavigator = createBottomTabNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <TabNavigator.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Movie List"
          component={MovieStackScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}
