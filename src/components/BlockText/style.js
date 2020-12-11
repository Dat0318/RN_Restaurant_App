import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const StyleInternal = StyleSheet.create({
  text: {
    textAlign: 'center',
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  image: {
    width,
    height,
  },
  // ResetPassWord
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  dotActive: {
    backgroundColor: '#fff',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  // LogInHeader: {},
  // LogInHeader: {},
  // LogInHeader: {},
  // LogInHeader: {},
  // LogInHeader: {},
  // LogInHeader: {},
});
