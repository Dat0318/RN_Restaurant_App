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
} from 'react-native';
import { styles } from './../styles';

export const ChooseDayMeeting = () => {
  const [images, setImages] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.des}>ChooseDayMeeting</Text>
    </View>
  );
};

export default ChooseDayMeeting;
