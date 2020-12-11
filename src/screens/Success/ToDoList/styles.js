import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	// to do list
	container: {
    position: 'relative',
    flex: 1,
  },
	item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
	itemName: {
    fontSize: 18,
    color: '#333',
    width: 200,
  },
  itemAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
	itemButtonEdit: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
	itemButtonText: {
    fontSize: 14,
    color: '#333'
  },
	itemButtonRemove: {
    backgroundColor: '#999',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 8,
    marginLeft: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
	itemAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff'
  },
	itemInput: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 8,
    marginBottom: 10,
    marginHorizontal: 20,
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    flex: 1
  },
	addButton: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
	addButtonText: {
    fontSize: 14,
    color: '#333'
  },
});
