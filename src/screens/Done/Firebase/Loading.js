/*
 *
 * @author DatTD
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 *
 */

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
