import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight } from '@common/index';

export const styles = StyleSheet.create({
  // style for fast image
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: getHeight(10),
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '33.33%',
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

  // style for content each pages
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: getHeight(15),
    color: '#000',
  },
  button: {
    marginTop: getHeight(10),
  },
});
