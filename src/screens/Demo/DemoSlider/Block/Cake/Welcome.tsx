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
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';
import { Header, Button, InputCustom } from './../Component';

export const Welcome = () => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.bg_cake_top} style={styles.bg_splash}>
        <Header left="back" style={{ backgroundColor: 'transparent' }} />
        <Text style={styles.headerTtl}>Cityguide</Text>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back!</Text>
        <View style={styles.wrapInput}>
          <InputCustom
            style={styles.input}
            placeholder={'Your email adress'}
            placeholderTextColor={'#b6b6b6'}
          />
          <InputCustom
            style={styles.input}
            source={Images.ic_cake_pass}
            placeholder={'Your password'}
            placeholderTextColor={'#b6b6b6'}
          />
        </View>
        <Button title="Login" />
        <Button title="Facebook" fill style={styles.fbBtn} />
        <Text style={styles.forgotTxt}>Forgot password?</Text>
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
    justifyContent: 'center',
  },
  headerTtl: {
    fontSize: getHeight(60),
    color: '#fff',
    marginTop: getHeight(30),
    marginBottom: getHeight(60),
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingVertical: getHeight(30),
    paddingHorizontal: getHeight(30),
  },
  wrapInput: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: getHeight(30),
    color: '#2196f3',
    textAlign: 'center',
    marginTop: getHeight(20),
  },
  subTitle: {
    position: 'absolute',
    bottom: getHeight(90),
    fontSize: getHeight(25),
    color: '#fff',
    textAlign: 'center',
    width: '90%',
  },
  input: {
    marginTop: getHeight(20),
  },
  fbBtn: {
    backgroundColor: '#2196f3',
  },
  forgotTxt: {
    fontSize: getHeight(20),
    color: '#b6b6b6',
    textAlign: 'center',
    marginTop: getHeight(10),
  },
});

export default Welcome;
