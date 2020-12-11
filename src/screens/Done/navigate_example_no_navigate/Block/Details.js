/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';
import { styles } from './../styles';
import { isFunction } from 'lodash';
// import io from 'socket.io-client';

const Details = ({ route, navigation }) => {
  const [images, setImages] = useState([]);
  const io = require('socket.io-client');
  const socket = io.connect('http://localhost:3000');

  useEffect(() => {
    console.log('123');
    socket.on('seq-num', (msg) => console.info(msg));

    // socket.on('connect', function() {
    //   console.log('connect success!');
    // });
  }, []);

  const sendImage = () => {
    socket.on('updatecount', (data) => {
      console.log(count);
    });

    socket.on('event', function(data) {
      console.log('this is a event called!');
    });
  };

  const disconnect = () => {
    socket.on('disconnect', function() {
      console.log('this connect is disabled!');
    });
  };

  // var trsf_params = route.params;

  // useEffect(() => {
  //   if (route.params?.otherParam) {
  //     console.log('route.params?.otherParam: ', route.params.otherParam);
  //   }
  // }, [route.params?.otherParam]);

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.txtCont}>this is details screen</Text>
        <Button
          title="go to details again"
          onPress={() => navigation.push('Details')}
        />
      </View>
    </View>
  );
};

export default Details;
