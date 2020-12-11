import { StyleSheet } from 'react-native';
import { ScreenHeight, getHeight, ScreenWidth } from '@common/index';

export const styles = StyleSheet.create({
  // style for fast image
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: getHeight(10),
  },
  wrap: {
    flex: 1,
    backgroundColor: 'white',
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

  // time keeping month
  calendar: {},
  header: {},
  hdLeft: {},
  arrowLeft: {
    width: getHeight(25),
    height: getHeight(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getHeight(12.5),
    backgroundColor: '#e99d23',
    overflow: 'hidden',
  },
  iconLeft: {
    tintColor: '#fff',
    width: getHeight(10),
    height: getHeight(15),
    resizeMode: 'contain',
    transform: [{ rotate: '180deg' }],
  },
  txtCenter: {
    fontSize: getHeight(20),
    color: '#e99d23',
  },
  hdRight: {},
  arrowRight: {
    width: getHeight(25),
    height: getHeight(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getHeight(12.5),
    backgroundColor: '#e99d23',
    overflow: 'hidden',
  },
  iconRight: {
    tintColor: '#fff',
    width: getHeight(10),
    height: getHeight(15),
    resizeMode: 'contain',
  },
  openAc: {
    padding: getHeight(10),
    backgroundColor: '#e99d23',
    borderRadius: getHeight(10),
    marginTop: getHeight(10),
    alignItems: 'center',
  },
  openText: {
    fontSize: getHeight(15),
    color: '#fff',
  },
  actionSheet: {
    paddingBottom: getHeight(30),
    marginBottom: getHeight(30),
  },
  headerAc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: getHeight(10),
    borderBottomWidth: getHeight(1),
    borderBottomColor: 'rgba(149,149,149,0.5)',
  },
  leftAc: {},
  textAc: {
    fontSize: getHeight(15),
    color: '#e99d23',
  },
  centerAc: {
    fontSize: getHeight(15),
    color: '#000',
  },
  rightAc: {},
  contentAc: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  datePicker: {
    flex: 1,
  },
  // style for support
  wheel: {
    width: '33.33%',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    overflow: 'hidden',
  },
  // wheel: {},

  // style for pick a meeting

  contentAc_v2: {
    padding: getHeight(10),
  },
  flexAc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemAc: {
    width: '50%',
  },
  topTextAc: {
    fontSize: getHeight(15),
    color: 'rgba(149,149,149,0.5)',
    marginBottom: getHeight(10),
  },
  inputAc: {
    fontSize: getHeight(15),
    color: '#383e42',
    borderColor: 'rgba(149,149,149,0.5)',
    borderWidth: getHeight(1),
    borderRadius: getHeight(10),
    flex: 1,
    paddingVertical: getHeight(2),
    paddingHorizontal: getHeight(10),
    marginRight: getHeight(10),
  },
  ic_refresh: {
    height: getHeight(30),
    width: getHeight(30),
    resizeMode: 'contain',
  },
  timeAc: {
    flexDirection: 'row',
    borderRadius: getHeight(10),
    overflow: 'hidden',
    marginTop: getHeight(10),
    backgroundColor: '#f9f9f9',
  },
  sunAc: {
    alignItems: 'center',
    borderRadius: getHeight(10),
    width: getHeight(40),
    justifyContent: 'center',
    backgroundColor: '#bdbfc0',
  },
  sunAction: {
    backgroundColor: '#e99d23',
  },
  ic_sun: {
    height: getHeight(12),
    width: getHeight(12),
    resizeMode: 'contain',
  },
  renTimeAc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  timeItem: {
    width: '16.66%',
    paddingVertical: getHeight(10),
    alignItems: 'center',
  },
  timeContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    width: '60%',
    paddingVertical: getHeight(5),
    // alignItems: 'stretch',
  },
  timeAction: {
    backgroundColor: '#e99d23',
    borderRadius: getHeight(10),
    maxWidth: '60%',
  },
  txtAction: {
    color: '#fff',
  },
  timeHour: {
    fontSize: getHeight(15),
    color: '#000',
  },
  TimeTail: {
    fontSize: getHeight(15),
    color: 'rgba(149,149,149,0.4)',
  },
  // flexAc: {},
  // style for chat
});

{
  /* <Header left="back" content="Location" right="search" />
  <Button title="Login" fill />
  <InputCustom
    source={Images.ic_cake_pass}
    placeholder={'Your email adress'}
    placeholderTextColor={'#b6b6b6'}
  />
  */
}
