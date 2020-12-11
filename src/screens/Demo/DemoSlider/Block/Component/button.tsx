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
  fill?: boolean;
  title?: string;
  clickButton?: any;
  style?: object;
}

export function Button(props?: Props) {
  var { title, fill, clickButton, style } = props;

  const _clickButton = () => {
    return clickButton !== undefined ? clickButton() : null;
  };
  return (
    <TouchableOpacity
      onPress={_clickButton}
      style={[styles.button, fill && styles.fillButton, style]}
    >
      <Text style={[styles.buttonTxt, fill && styles.fillText]}>{title}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  // style header
  button: {
    backgroundColor: '#2196f3',
    paddingVertical: getHeight(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeight(15),
    borderRadius: getHeight(10),
    borderWidth: getHeight(1),
    borderColor: '#2196f3',
  },
  fillButton: {
    backgroundColor: 'transparent',
    borderColor: '#2196f3',
  },
  buttonTxt: {
    fontSize: getHeight(20),
    color: '#fff',
  },
  fillText: {
    color: '#2196f3',
  },
});

export default Button;
