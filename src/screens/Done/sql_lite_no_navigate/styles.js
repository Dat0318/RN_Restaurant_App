import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // to do list
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
  // style for todo list
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  listRecord: {
    padding: 5,
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    minWidth: 100,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    padding: 0,
    paddingHorizontal: 10,
  },
  submit: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ececec',
  },
  // style for row
  id: {
    minWidth: 30,
    color: '#000',
    fontSize: 15,
  },
  name: {
    minWidth: 100,
    color: '#000',
    fontSize: 15,
  },
  description: {
    flex: 1,
    color: '#000',
    fontSize: 15,
  },
  buttonClose: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    marginLeft: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
  },
});
