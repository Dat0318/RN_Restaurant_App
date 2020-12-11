/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, { useEffect, useState, createRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList, Animated,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';
import { Header, Button, InputCustom } from './../Component';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

const data = [
  {
    img: Images.bg_cake_dish,
    name: 'Gramercy Tavern',
    location: '42 E 20th St',
    heart: 228,
  },
  {
    img: Images.bg_cake_dish,
    name: 'Blue Hill',
    location: '75 Washington PI',
    heart: 215,
  },
  {
    img: Images.bg_cake_dish,
    name: 'Le Bernardin',
    location: '155 W 51st St',
    heart: 199,
  },
  {
    img: Images.bg_cake_dish,
    name: 'Jean-Georges',
    location: '1 Central Park West',
    heart: 183,
  },
  {
    img: Images.bg_cake_dish,
    name: 'The Four Seasons',
    location: '99 E 52nd St',
    heart: 178,
  },
  {
    img: Images.bg_cake_dish,
    name: 'Ninja New York',
    location: '25 Hudson St',
    heart: 78,
  },
  {
    img: Images.bg_cake_dish,
    name: 'Estiatorio Milos',
    location: '125 Tran Hung Dao',
    heart: 228,
  },
  {
    img: Images.bg_cake_dish,
    name: 'The Four Seasons',
    location: '99 E 52nd St',
    heart: 178,
  },
  {
    img: Images.bg_cake_dish,
    name: 'Ninja New York',
    location: '25 Hudson St',
    heart: 78,
  },
  {
    img: Images.bg_cake_dish,
    name: 'Estiatorio Milos',
    location: '125 Tran Hung Dao',
    heart: 228,
  },
];

const swipeableRow = createRef();

export const Categories = () => {
  const [images, setImages] = useState([]);

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={() => {
        swipeableRow.current?.close();
      }}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  const _renderItem = (item) => {
    return (
      <Swipeable ref={swipeableRow} renderLeftActions={renderLeftActions} leftThreshold={30}
        rightThreshold={40}>
        <TouchableOpacity style={styles.item}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.middle}>
            <Text style={styles.ttl}>{item.name}</Text>
            <View style={styles.infor}>
              <Image source={Images.ic_cake_location} style={styles.icon} />
              <Text style={styles.sub_ttl}>{item.location}</Text>
              <Image source={Images.ic_cake_fill_heart} style={styles.icon} />
              <Text style={styles.sub_ttl}>{item.heart}</Text>
            </View>
          </View>
          <Image
            source={Images.ic_cake_sign_arrow_right}
            style={styles.details}
          />
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <Header left="back" content="Browse Restaurants" right="search" />
      <FlatList
        numColumns={1}
        data={data}
        renderItem={({ item, index }) => _renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  // style common
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // end common
  list: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#b6b6b6',
    borderBottomWidth: getHeight(1),
    paddingHorizontal: getHeight(30),
  },
  img: {
    width: getHeight(60),
    height: getHeight(60),
    resizeMode: 'contain',
    borderWidth: getHeight(1),
    borderRadius: getHeight(10),
    overflow: 'hidden',
  },
  middle: {
    marginVertical: getHeight(15),
    flex: 1,
    marginLeft: getHeight(10),
  },
  ttl: {
    fontSize: getHeight(20),
    color: 'rgba(0,0,0,0.6)',
    marginBottom: getHeight(3),
  },
  infor: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: getHeight(15),
    height: getHeight(12),
    resizeMode: 'contain',
    marginRight: getHeight(5),
  },
  sub_ttl: {
    fontSize: getHeight(15),
    color: '#b6b6b6',
    marginRight: getHeight(10),
  },
  details: {
    width: getHeight(25),
    height: getHeight(15),
    resizeMode: 'contain',
  },
  // wipeable
  leftAction: {
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
});

export default Categories;
