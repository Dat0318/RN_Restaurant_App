/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';
import { Header, Button, InputCustom } from './../Component';

const data = [
  {
    img: Images.ic_cake_ring,
    ttl: 'Hotels',
  },
  {
    img: Images.ic_cake_arm_chair,
    ttl: 'Hotels',
  },
  {
    img: Images.ic_cake_cootail,
    ttl: 'Nightlife',
  },
  {
    img: Images.ic_cake_bag,
    ttl: 'Shopping',
  },
  {
    img: Images.ic_cake_race,
    ttl: 'Culture',
  },
  {
    img: Images.ic_cake_empty_heart,
    ttl: 'Popular',
  },
];

export const Categories = () => {
  const [images, setImages] = useState([]);

  const _renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.ttl}>{item.ttl}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header left="back" content="Browse Categories" right="search" />
      <FlatList
        numColumns={2}
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
    paddingVertical: getHeight(30),
    paddingHorizontal: getHeight(30),
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: getHeight(10),
    height: (ScreenWidth - getHeight(140)) / 2,
    borderColor: '#b6b6b6',
    borderWidth: getHeight(1),
    borderRadius: getHeight(5),
  },
  img: {
    width: getHeight(50),
    height: getHeight(50),
    resizeMode: 'contain',
  },
  ttl: {
    fontSize: getHeight(20),
    color: '#b6b6b6',
    marginTop: getHeight(15),
  },
});

export default Categories;
