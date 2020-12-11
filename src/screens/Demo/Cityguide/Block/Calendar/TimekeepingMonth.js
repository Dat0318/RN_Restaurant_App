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
  FlatList,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Images } from '@images';
import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';

export const TimekeepingMonth = () => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.main}>
          <Text style={styles.title}>Thanks for downloading our template!</Text>
          <Text style={styles.subTitle}>Hope that you enjoy it well!</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.nameWeb}>Check our site</Text>
          <Text style={styles.web}>www.symu.co</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  // style common
  container: {
    flex: 1,
    backgroundColor: '#eb304d',
  },
  // end common
  content: {
    flex: 1,
    paddingVertical: getHeight(30),
    paddingHorizontal: getHeight(15),
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: getHeight(50),
    color: '#fff',
    width: '70%',
  },
  subTitle: {
    fontSize: getHeight(30),
    color: '#000',
    marginTop: getHeight(5),
  },
  bottom: {},
  nameWeb: {
    fontSize: getHeight(27),
    color: '#000',
  },
  web: {
    fontSize: getHeight(25),
    color: '#fff',
    marginTop: getHeight(3),
  },
});

export default TimekeepingMonth;
