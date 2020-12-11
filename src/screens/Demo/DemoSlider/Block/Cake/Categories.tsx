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
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth, getWidth } from '@common/index';
import { Header, Button, InputCustom } from './../Component';
import ActionSheet from 'react-native-actions-sheet';

const list_avatar = [
  {
    img: Images.ic_avatar_1,
    top: getHeight(120),
    left: getHeight(240),
  },
  {
    img: Images.ic_avatar_2,
    top: getHeight(100),
    left: getHeight(140),
  },
  {
    img: Images.ic_avatar_3,
    top: getHeight(200),
    left: getHeight(120),
  },
  {
    img: Images.ic_avatar_2,
    top: getHeight(180),
    left: getHeight(300),
  },
  {
    img: Images.ic_avatar_1,
    top: getHeight(300),
    left: getHeight(130),
  },
  {
    img: Images.ic_avatar_3,
    top: getHeight(200),
    left: getHeight(20),
  },
  {
    img: Images.ic_avatar_3,
    top: getHeight(0),
    left: getHeight(50),
  },
];

const actionSheetRef = createRef();

function PlaceAvatar(props?: any) {
  const { source, top, left } = props;

  return (
    <TouchableOpacity style={[styles.place, { top: top, left: left }]} onPress={() => {
      actionSheetRef.current?.setModalVisible();
    }}>
      <View style={styles.wrap_avatar}>
        <Image source={source} style={styles.avatar} />
      </View>
      <View style={styles.triangle} />
    </TouchableOpacity>
  );
}

export const Categories = () => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.bg} style={styles.bg}>
        <View style={{ flex: 1, position: 'relative' }}>
          {list_avatar.map((elm, index) => {
            return (
              <PlaceAvatar
                key={index}
                source={elm.img}
                top={elm.top}
                left={elm.left}
              />
            );
          })}
        </View>
      </ImageBackground>
      <ActionSheet ref={actionSheetRef} extraScroll={0} gestureEnabled={true} elevation={300} initialOffsetFromBottom={0.35}>
        <View style={styles.ac}>
          <View style={styles.ac_top}>
            <Image source={Images.ic_avatar_1} style={styles.ac_avatar} />
            <View style={styles.ac_middle}>
              <Text style={styles.ac_name}>Charles Doe</Text>
              <View style={styles.ac_info}>

                <Text style={styles.ac_location}>
                  <Image source={Images.ic_cake_location} style={styles.ic_location} />  4 km</Text>

                <Text style={styles.ac_chair}>
                  <Image source={Images.ic_chair_small} style={styles.ic_chair} />  2 Couches</Text>
                <View style={styles.ac_review}>
                  <Image source={Images.ic_start} style={styles.ic_star} />
                  <Image source={Images.ic_start} style={styles.ic_star} />
                  <Image source={Images.ic_start} style={styles.ic_star} />
                  <Image source={Images.ic_start} style={styles.ic_star} />
                  <Image source={Images.ic_start} style={styles.ic_star} />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.ac_des}>I'm a friendly, honestly and always happy guy.  At the moment I really enjoy travelling, going to the beach, explore nature, reading, writing, play football and tennis, nice music, cinema, good wine and beer, meeting International People and talk with them with a few coronas!</Text>
          <Button title="SEND COUCH REQUEST" />
        </View>
      </ActionSheet>
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
  bg: {
    flex: 1,
  },
  place: {
    height: getHeight(70),
    width: getHeight(70),
    borderRadius: getHeight(35),
  },
  wrap_avatar: {
    height: getHeight(70),
    width: getHeight(70),
    borderRadius: getHeight(35),
    backgroundColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  avatar: {
    height: getHeight(60),
    width: getHeight(60),
    borderRadius: getHeight(30),
    resizeMode: 'cover',
  },
  triangle: {
    position: 'absolute',
    bottom: -getHeight(8),
    left: getHeight(23.5),
    alignItems: 'center',
    justifyContent: 'center',

    width: 0,
    height: 0,
    borderTopColor: '#ececec',
    borderTopWidth: getHeight(10),

    borderLeftColor: 'transparent',
    borderLeftWidth: getHeight(10),
    borderRightColor: 'transparent',
    borderRightWidth: getHeight(10),
  },
  ac: {
    paddingHorizontal: getHeight(15),
    paddingVertical: getHeight(10),
  },
  ac_top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ac_avatar: {
    height: getHeight(60),
    width: getHeight(60),
    borderRadius: getHeight(30),
    resizeMode: 'cover',
  },
  ac_middle: {
    marginLeft: getHeight(15),
  },
  ac_name: {
    fontSize: getHeight(20),
    color: '#000',
  },
  ac_info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ac_location: {
    fontSize: getHeight(15),
    color: '#000',
    flexDirection: 'row',
  },
  ac_chair: {
    fontSize: getHeight(15),
    color: '#000',
    flexDirection: 'row',
    marginLeft: getHeight(10),
  },
  ac_review: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ic_star: {
    height: getHeight(20),
    width: getHeight(20),
    resizeMode: 'contain',
    marginLeft: getHeight(10),
  },
  ic_location: {
    height: getHeight(12),
    width: getHeight(8),
    resizeMode: 'contain',
    tintColor: '#ececec',
  },
  ic_chair: {
    height: getHeight(12),
    width: getHeight(12),
    resizeMode: 'contain',
    tintColor: '#ececec',
    marginRight: getHeight(10),
  },
  ac_des: {
    fontSize: getHeight(15),
    color: '#000',
    paddingVertical: getHeight(15),
  }
});

export default Categories;
