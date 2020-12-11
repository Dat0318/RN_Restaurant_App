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

const Home = ({ navigation }) => {
  const [images, setImages] = useState([]);

  const _renderListItem = () => {
    var list = [],
      listImage = [];
    for (var i = 0; i < 20; i++) {
      listImage.push(
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f864c114439933.56283f7a9208e.jpg'
      );
      list.push(
        <View style={styles.item} key={i}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f864c114439933.56283f7a9208e.jpg?',
            }}
          />
          <Text style={styles.des}>Content</Text>
        </View>
      );
    }
    // Image.queryCache(listImage);
    return list;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      >
        <Text>Go to details</Text>
      </TouchableOpacity>

      <Button
        title="ProductDetails"
        onPress={() => navigation.push('ProductDetails')}
      />

      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />

      <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />

      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />

      <ScrollView>
        <View style={styles.listItem}>{_renderListItem()}</View>
      </ScrollView>
    </View>
  );
};

export default Home;
