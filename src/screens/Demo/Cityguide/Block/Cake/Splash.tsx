/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { getHeight } from '@common/index';
import { Button } from './../Component';

export const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.bg_cake} style={styles.bg_splash}>
        <View style={styles.content}>
          <Text style={styles.title}>Cityguide</Text>
          <Text style={styles.subTitle}>
            Explore the best places of the world's most vibrant cities!
          </Text>
        </View>
        <Button title="Login" />
        <Button title="Register" fill />
      </ImageBackground>
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
  bg_splash: {
    resizeMode: 'cover',
    flex: 1,
    paddingVertical: getHeight(30),
    paddingHorizontal: getHeight(30),
  },
  content: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: getHeight(60),
    color: '#fff',
  },
  subTitle: {
    position: 'absolute',
    bottom: getHeight(90),
    width: '90%',
    fontSize: getHeight(25),
    color: '#fff',
    textAlign: 'center',
  },
  splash: {},
});

export default Splash;
