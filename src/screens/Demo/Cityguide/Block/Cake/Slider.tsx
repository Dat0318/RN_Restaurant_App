/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import _ from 'lodash';
import { StyleSheet } from 'react-native';
import { getHeight, ScreenWidth } from '@common/index';
import { Button } from './../Component';

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const _onScroll = (e) => {
    // console.log(e.nativeEvent.contentOffset.x, 'ScreenWidth: ', ScreenWidth);
    var width = e.nativeEvent.contentOffset.x,
      index = width / ScreenWidth;
    setIndex(index);
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        disableIntervalMomentum
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        style={styles.slider}
        onScroll={_onScroll}
      >
        <View style={styles.page}>
          <Text style={styles.title}>New York City</Text>
          <Text style={styles.sub_title}>
            Located at the southern tip of the State of New York, the city is
            the center of the New York
          </Text>
          <Text style={styles.sub_title}>
            metropolitan area, one of the most populous urban agglomerations in
            the world.
          </Text>
          <Button title="Choose" fill style={styles.fbBtn} />
        </View>
        <View style={styles.page}>
          <Text style={styles.title}>London City</Text>
          <Text style={styles.sub_title}>
            Located at the southern tip of the State of New York, the city is
            the center of the New York
          </Text>
          <Text style={styles.sub_title}>
            metropolitan area, one of the most populous urban agglomerations in
            the world.
          </Text>
          <Button title="Choose" fill style={styles.fbBtn} />
        </View>
        <View style={styles.page}>
          <Text style={styles.title}>Ha Noi City</Text>
          <Text style={styles.sub_title}>
            Located at the southern tip of the State of New York, the city is
            the center of the New York
          </Text>
          <Text style={styles.sub_title}>
            metropolitan area, one of the most populous urban agglomerations in
            the world.
          </Text>
          <Button title="Choose" fill style={styles.fbBtn} />
        </View>
        <View style={styles.page}>
          <Text style={styles.title}>Royal City</Text>
          <Text style={styles.sub_title}>
            Located at the southern tip of the State of New York, the city is
            the center of the New York
          </Text>
          <Text style={styles.sub_title}>
            metropolitan area, one of the most populous urban agglomerations in
            the world.
          </Text>
          <Button title="Choose" fill style={styles.fbBtn} />
        </View>
      </ScrollView>
      <View style={styles.pagination}>
        {[0, 1, 2, 3].map((elm, i) => {
          return (
            <View
              key={i}
              style={[styles.dots, elm === index && styles.ac_dots]}
            />
          );
        })}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  // style common
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  // end common
  slider: {},
  page: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: ScreenWidth,
    paddingHorizontal: getHeight(20),
    paddingVertical: getHeight(30),
  },
  title: {
    fontSize: getHeight(60),
    color: '#2196f3',
    marginBottom: getHeight(20),
    textAlign: 'center',
  },
  sub_title: {
    fontSize: getHeight(20),
    color: '#000',
    textAlign: 'center',
  },
  content: {},
  pagination: {
    position: 'absolute',
    bottom: getHeight(10),
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  dots: {
    width: getHeight(6),
    height: getHeight(6),
    borderRadius: getHeight(3),
    backgroundColor: '#b6b6b6',
    margin: getHeight(5),
  },
  ac_dots: {
    backgroundColor: '#2196f3',
  },
  fbBtn: {
    backgroundColor: '#2196f3',
    width: '100%',
    marginTop: getHeight(50),
    marginBottom: getHeight(10),
  },
});

export default Slider;
