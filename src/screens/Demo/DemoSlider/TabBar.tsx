import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';

import React from 'react';
export function TabBar({
  state,
  descriptors,
  activeTintColor,
  inactiveTintColor,
  navigation,
  position,
}) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0.4)),
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.ic_btn}
            activeOpacity={1}
          >
            <View
              style={[styles.wrap_btn, isFocused && { top: -getHeight(3) }]}
            >
              {options.tabBarIcon({
                color: isFocused ? activeTintColor : inactiveTintColor,
              })}
              <Animated.Text style={[styles.label, { opacity }]}>
                {label}
              </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;

export const styles = StyleSheet.create({
  // style common
  ic_btn: {
    flex: 1,
    backgroundColor: '#151925',
  },
  label: {
    fontSize: getHeight(15),
    color: '#fff',
    // marginTop: getHeight(10),
  },
  wrap_btn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getHeight(10),
  },
  ic_icon: {
    height: getHeight(20),
    width: getHeight(20),
    resizeMode: 'contain',
    marginBottom: getHeight(5),
  },
  // wrap_btn: {},
});
