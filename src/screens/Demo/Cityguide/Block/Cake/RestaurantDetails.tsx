/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { getHeight, ScreenWidth } from '@common/index';
import { Header } from './../Component';

export const Profile = () => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <Header left="back" content="Blue Hill" right="heart" />
      <ImageBackground
        source={Images.bg_cake_top_details}
        style={styles.bg_splash}
      >
        <View style={styles.top}>
          <Text style={styles.titleTop}>Blue Hill</Text>
          <View style={styles.info}>
            <Image source={Images.ic_cake_location} style={styles.icon} />
            <Text style={styles.sub_ttl}>75 Washington PI</Text>
            <Image source={Images.ic_cake_time} style={styles.icon} />
            <Text style={styles.sub_ttl}>5PM - 11PM</Text>
            <Image source={Images.ic_cake_fill_heart} style={styles.icon} />
            <Text style={styles.sub_ttl}>215</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.txt}>
          The original Blue Hill restaurant, opened in 2000, is located in
          Greenwich Village, New York City. Hidden three steps below street
          level, the restaurant occupies a landmark "speakeasy" just off of
          Washington Square Park.
        </Text>
      </View>

      <View style={styles.contact}>
        <Image source={Images.ic_cake_phone} style={styles.ic_phone} />
        <Text style={styles.ic_text}>+1 212 535 1666</Text>
        <Image source={Images.ic_cake_email} style={styles.ic_phone} />
        <Text style={styles.ic_text}>contact@bluehill.com</Text>
      </View>
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
    height: getHeight(250),
  },
  top: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: getHeight(30),
  },
  titleTop: {
    fontSize: getHeight(40),
    color: '#fff',
    marginBottom: getHeight(10),
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getHeight(20),
  },
  icon: {
    width: getHeight(15),
    height: getHeight(12),
    resizeMode: 'contain',
    marginRight: getHeight(5),
    tintColor: '#fff',
  },
  sub_ttl: {
    fontSize: getHeight(15),
    color: '#b6b6b6',
    marginRight: getHeight(10),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getHeight(30),
    paddingHorizontal: getHeight(30),
  },
  txt: {
    fontSize: getHeight(20),
    color: '#b6b6b6',
  },
  contact: {
    backgroundColor: '#2196f3',
    paddingVertical: getHeight(15),
    paddingHorizontal: getHeight(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  ic_phone: {
    width: getHeight(15),
    height: getHeight(12),
    resizeMode: 'contain',
    marginRight: getHeight(5),
  },
  ic_text: {
    fontSize: getHeight(15),
    color: '#fff',
    marginRight: getHeight(40),
  },
});

export default Profile;
