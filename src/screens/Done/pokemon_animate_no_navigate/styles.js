import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight } from '@common/index';

export const styles = StyleSheet.create({
  // style for fast image
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: getHeight(10),
  },
  item: {
    width: '33.33%',
    // height: getHeight(100),
    alignItems: 'center',
    marginBottom: getHeight(20),
  },
  image: {
    height: getHeight(100),
    width: getHeight(100),
    resizeMode: 'contain',
    marginBottom: getHeight(5),
  },
  des: {
    fontSize: getHeight(15),
    color: '#000',
  },
});
