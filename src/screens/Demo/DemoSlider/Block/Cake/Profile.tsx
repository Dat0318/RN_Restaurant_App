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
  Image,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';
import { Header, Button, InputCustom } from './../Component';

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

export const Profile = () => {
  const [images, setImages] = useState([]);
  const radius = 60;
  const radiusMinusBorder = 58;

  const _renderItem = (item) => {
    return (
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
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.bg_cake_top} style={styles.bg_splash}>
        <Header
          left='back'
          content='Profile'
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
          {/* <View
            style={[
              styles.leftWrap,
              {
                width: radius,
                height: radius * 2,
              },
            ]}
          >
            <View
              style={[
                styles.halfCircle,
                {
                  width: radius,
                  height: radius * 2,
                  borderRadius: radius,
                  overflow: 'hidden',
                  transform: [
                    { translateX: radius / 2 },
                    { rotate: `66deg` },
                    { translateX: -radius / 2 },
                  ],
                  backgroundColor: 'yellow',
                },
              ]}
            />
            <View
              style={[
                styles.innerCircle,
                {
                  width: radiusMinusBorder * 2,
                  height: radiusMinusBorder * 2,
                  borderRadius: radiusMinusBorder,
                  backgroundColor: 'green',
                },
              ]}
            />
          </View> */}

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

          <FlatList
            numColumns={1}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => _renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Button title='Log out' fill style={styles.fbBtn} />
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
  fbBtn: { backgroundColor: '#fff' },
  // circle bar
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'red',
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  // list
  list: {
    flex: 1,
    marginTop: 10,
    // backgroundColor: 'red',
  },
  item: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#b6b6b6',
    borderWidth: getHeight(1),
    borderRadius: getHeight(10),
    paddingHorizontal: getHeight(10),
    // width: getHeight(300),
    maxHeight: getHeight(100),
    marginRight: getHeight(10),
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
});

export default Profile;
