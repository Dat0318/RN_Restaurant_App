/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { isFunction, fromPairs } from 'lodash';
import { LocaleConfig } from 'react-native-calendars';
import { Images } from '@images';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, styles } from './TabBar';

import {
  Splash,
  Slider,
  Welcome,
  Categories,
  Restaurant,
  RestaurantDetails,
  Profile,
} from './Block/Cake';

const Tab = createMaterialTopTabNavigator();

function MenuBottom() {
  const [images, setImages] = useState([]);

  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      lazy={true}
      tabBarOptions={{
        activeTintColor: '#e61057',
        inactiveTintColor: '#fff',
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Find a couch',
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.ic_chair_small}
              style={[styles.ic_icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.ic_message}
              style={[styles.ic_icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{
          tabBarLabel: 'Recent couches',
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.ic_clock}
              style={[styles.ic_icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Your profile',
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.ic_profile}
              style={[styles.ic_icon, { tintColor: color }]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Item = createStackNavigator();

function List() {
  return (
    <Item.Navigator headerMode={'none'}>
      <Item.Screen name="Welcome" component={Welcome} />
    </Item.Navigator>
  );
}

const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="MenuBottom" component={MenuBottom} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}
export default Root;
