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

const Products = () => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.txtCont}>this is products screen</Text>
        <Text style={styles.txtCont}>Go to Home</Text>
        <Button
          style={styles.button}
          title="Go to Products"
          onPress={() => navigation.navigate('Products')}
        />
        <Text style={styles.txtCont}>go back</Text>
        <Button
          style={styles.button}
          title="go back"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.txtCont}>Go back to first screen in stack</Text>
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};

export default Products;
