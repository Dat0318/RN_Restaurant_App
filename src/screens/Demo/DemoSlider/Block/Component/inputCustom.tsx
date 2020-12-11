/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, {
  useEffect,
  useState,
  createRef,
  FunctionComponent,
} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Images } from '../../../../../image';
import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';

interface Props {
  // props?: any;
  sourceImg?: any;
}

export function InputCustom(props?: any) {
  const {
    source,
    style,
    placeholderTextColor,
    placeholder,
    propsInput,
  } = props;

  return (
    <View style={[styles.wrapInput, style]}>
      <Image
        style={styles.icon}
        source={source ? source : Images.ic_cake_email}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...propsInput}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  // style header
  wrapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(182,182,182,0.6)',
    borderBottomWidth: getHeight(1),
    paddingHorizontal: getHeight(12),
    // marginTop: getHeight(20),
  },
  icon: {
    width: getHeight(20),
    height: getHeight(15),
    resizeMode: 'contain',
    tintColor: '#b6b6b6',
  },
  input: {
    flex: 1,
    padding: getHeight(5),
    paddingLeft: getHeight(10),
  },
});

export default InputCustom;
