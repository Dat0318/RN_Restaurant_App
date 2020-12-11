/*
 *
 * @author DatTD
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 *
 */

import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
export default class Main extends React.Component {
  state = { currentUser: null };
  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
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
