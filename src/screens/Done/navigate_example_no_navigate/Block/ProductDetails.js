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
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { styles } from './../styles';
import { isFunction } from 'lodash';

const ProductDetails = ({ navigation }) => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.txtCont}>this is product details screen</Text>
        <Button
          title="re set title for products details"
          onPress={() => navigation.setOptions({ title: 'Updated!' })}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
