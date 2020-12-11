// @flow
import {StyleSheet} from 'react-native';

const calendarHeight = 2400;
// const eventPaddingLeft = 4
const leftMargin = 50 - 1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentStyle: {
    backgroundColor: '#ffff',
    height: calendarHeight + 100,
  },
  header: {
    paddingHorizontal: 30,
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E8F0',
    backgroundColor: '#F5F5F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  event: {
    position: 'absolute',
    backgroundColor: '#5bff40',
    opacity: 0.8,
    borderColor: '#DDE5FD',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 4,
    height: 25,
    flex: 1,
    paddingTop: 5,
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  eventTitle: {
    color: 'red',
    fontWeight: '600',
    minHeight: 15,
  },
  eventSummary: {
    color: '#615B73',
    fontSize: 12,
    flexWrap: 'wrap',
  },
  eventTimes: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#615B73',
    flexWrap: 'wrap',
  },
  line: {
    height: 1,
    position: 'absolute',
    left: leftMargin,
    backgroundColor: 'rgb(0,0,0)',
  },
  lineNow: {
    height: 1,
    position: 'absolute',
    left: leftMargin,
    backgroundColor: 'red',
  },
  timeLabel: {
    position: 'absolute',
    left: 10,
    color: 'rgb(0,0,0)',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
  },
});
export default styles;
