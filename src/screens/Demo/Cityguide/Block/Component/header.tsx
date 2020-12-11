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
  left?: any;
  content?: string;
  right?: any;
  leftPress?: any;
  rightPress?: any;
  style?: object;
}

export function Header(props?: Props) {
  const [images, setImages] = useState([]);
  var { left, content, right, leftPress, rightPress, style } = props;

  const _leftPress = () => {
    if (left === 'back') {
      return null;
    } else {
      return leftPress !== undefined ? leftPress() : null;
    }
  };

  const _renderLeft = () => {
    if (left === 'back') {
      return <Image style={styles.ic_cake_back} source={Images.ic_cake_back} />;
    } else {
      return null;
    }
  };

  const _renderCenter = () => {
    if (content !== undefined || content !== '') {
      return <Text style={styles.titleCenter}>{content}</Text>;
    }
  };

  const _rightPress = () => {
    if (right === 'search') {
      return null;
    } else {
      return rightPress !== undefined ? rightPress() : null;
    }
  };

  const _renderRight = () => {
    if (right === 'search') {
      return (
        <Image style={styles.ic_cake_search} source={Images.ic_cake_search} />
      );
    } else if (right === 'heart') {
      return (
        <Image
          style={styles.ic_cake_fill_heart}
          source={Images.ic_cake_fill_heart}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <View style={[styles.header, style]}>
      <StatusBar backgroundColor="transparent" hidden translucent />
      <TouchableOpacity onPress={_leftPress}>{_renderLeft()}</TouchableOpacity>
      {_renderCenter()}
      <TouchableOpacity onPress={_rightPress}>
        {_renderRight()}
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  // style header
  header: {
    backgroundColor: '#2196f3',
    height: getHeight(60),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getHeight(20),
    paddingTop: getHeight(10),
  },
  titleCenter: {
    fontSize: getHeight(20),
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  ic_cake_back: {
    width: getHeight(20),
    height: getHeight(15),
    resizeMode: 'contain',
  },
  ic_cake_fill_heart: {
    width: getHeight(20),
    height: getHeight(15),
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  ic_cake_search: {
    width: getHeight(24),
    height: getHeight(20),
    resizeMode: 'contain',
  },
});

export default Header;
