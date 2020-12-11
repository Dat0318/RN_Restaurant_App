import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // to do list
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff',
  },
  swipeContainer: {},
  alphabetSidebar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 5,
  },
  name: {
    fontSize: 15,
  },
  cell: {
    height: 95,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
