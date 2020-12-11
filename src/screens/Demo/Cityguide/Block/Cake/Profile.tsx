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

export const Profile = () => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.bg_cake_top} style={styles.bg_splash}>
        <Header
          left="back"
          content="Profile"
          style={{ backgroundColor: 'transparent' }}
        />
      </ImageBackground>
      <View style={styles.pickPhoto}>
        <View style={styles.avatar}>
          <View style={styles.thumb} />
        </View>
        <Text style={styles.titlePhoto}>Welcome back!</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.wrapInput}>
          <InputCustom
            style={styles.input}
            source={Images.ic_cake_empty_person}
            placeholder={'Your email adress'}
            placeholderTextColor={'#b6b6b6'}
            propsInput={{ value: 'Jakub Kowalczyk' }}
          />
          <InputCustom
            style={styles.input}
            placeholder={'Your password'}
            placeholderTextColor={'#b6b6b6'}
            propsInput={{ value: 'jakubkowalczyk@mail.com' }}
          />
          <InputCustom
            style={styles.input}
            source={Images.ic_cake_pass}
            placeholder={'Your password'}
            placeholderTextColor={'#b6b6b6'}
            propsInput={{ value: '123123123113212313', secureTextEntry: true }}
          />
        </View>
        <Button title="Log out" fill style={styles.fbBtn} />
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
    justifyContent: 'flex-start',
    height: getHeight(200),
  },
  content: {
    flex: 1,
    paddingVertical: getHeight(30),
    paddingHorizontal: getHeight(30),
  },
  pickPhoto: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    height: getHeight(100),
  },
  avatar: {
    width: getHeight(140),
    height: getHeight(140),
    borderRadius: getHeight(70),
    backgroundColor: '#b6b6b6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: getHeight(-70),
  },
  thumb: {
    width: getHeight(120),
    height: getHeight(120),
    borderRadius: getHeight(60),
    resizeMode: 'contain',
    backgroundColor: 'gray',
  },
  titlePhoto: {
    fontSize: getHeight(20),
    color: '#2196f3',
    textAlign: 'center',
    marginTop: getHeight(20),
  },
  wrapInput: {
    flex: 1,
    justifyContent: 'center',
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
  fbBtn: { backgroundColor: '#f44336' },
});

export default Profile;
