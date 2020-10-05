// @flow
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import HomeScreen from './screens/HomeScreen';
import MovieListScreen from './screens/MovieListScreen';

const HomeStack = createSharedElementStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen
        name="CouchBuddies"
        options={{
          headerStyle: {
            backgroundColor: '#7d43d9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

const TabNavigator = createBottomTabNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBarOptions={{
          activeTintColor: '#7d43d9',
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
          component={MovieListScreen}
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
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}
