import { Platform, StyleSheet } from 'react-native';
import { getHeight, getWidth, normalize } from '@common';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  chatDetailsList: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(15),
  },
  chatDetailsContain: {
    flexDirection: 'row',
  },
  chatDetailsContent: {
    alignItems: 'flex-end',
    flex: 1,
  },
  chatDetailsTime: {
    fontSize: normalize(11.81),
    color: '#8a8a8a',
    marginBottom: getHeight(10),
  },
  chatDetailsMessage: {
    width: '70%',
    backgroundColor: '#48d2ff',
    paddingHorizontal: getWidth(20),
    paddingVertical: getHeight(10),
    borderRadius: 50,
    borderTopRightRadius: 0,
  },
  chatDetailsMessagePartner: {
    backgroundColor: '#e5e5e5',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 0,
  },
  chatDetailsMessageText: {
    fontSize: getHeight(14.59),
    color: '#fff',
  },
  chatDetailsAvatar: {
    marginRight: getWidth(10),
  },
  chatDetailsAvatarImage: {
    width: getWidth(40),
    height: getWidth(40),
    resizeMode: 'cover',
    borderRadius: getWidth(40) / 2,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    flexGrow: 1,
  },
  // message
  chatDetailsSendMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: getWidth(10),
    backgroundColor: '#fff',
    borderTopColor: '#f2f2f2',
    borderTopWidth: 1,
  },
  chatDetailsInput: {
    color: '#8a8a8a',
    fontSize: getHeight(15.63),
    overflow: 'hidden',
    flex: 1,
  },
  chatDetailsButtonSend: {
    // backgroundColor: 'red',
  },
  chatDetailsSendImage: {
    width: getWidth(23),
    height: getHeight(20),
    resizeMode: 'contain',
  },
});
export default styles;
