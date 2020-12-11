import { StyleSheet } from 'react-native';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const styles = StyleSheet.create({
  // to do list

  // range dates
  header: {
    backgroundColor: 'lightblue',
    paddingVertical: 5,
  },
  content: {
    paddingVertical: 20,
    backgroundColor: 'yellow',
  },
  contentTop: {
    height: 0,
  },
});
