/*
 *
 * @author DatTD
 *
 * Created on Wed Jul 08 2020
 * Copyright (c) 2020 ApecSoft
 */

import React, { useEffect, useState, createRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './../styles';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ActionSheet from 'react-native-actions-sheet';
import {
  WheelPicker,
  TimePicker,
  DatePicker,
} from 'react-native-wheel-picker-android';
import moment from 'moment';
// import DatePicker from 'react-native-date-picker';
import _ from 'lodash';
import { Images } from '@images';

const testIDs = require('./testIDs');
const actionSheetRef = createRef();
const wheelPickerData = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];

const weekdays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];

const months = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

const days = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
];

const years = [
  '1990',
  '1991',
  '1992',
  '1993',
  '1994',
  '1995',
  '1996',
  '1997',
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
  '2029',
  '2030',
  '2031',
  '2032',
  '2033',
  '2034',
  '2035',
  '2036',
  '2037',
  '2038',
  '2039',
];

export const TimekeepingMonth = () => {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState('');
  const [current, setCurrent] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState(4);
  const [day, setDay] = useState(5);
  const [year, setYear] = useState(6);
  const [index, setIndex] = useState(3);
  const [section, setSection] = useState('AM');
  // const [date, setDate] = useState(moment().format("MM DD YYY"));

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  const getDisabledDates = (startDate, endDate, daysToDisable) => {
    const disabledDates = {};
    const start = moment(startDate);
    const end = moment(endDate);
    for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
      if (_.includes(daysToDisable, m.weekday())) {
        disabledDates[m.format('YYYY-MM-DD')] = { disabled: true };
      }
    }
    return disabledDates;
  };

  const _renderHeader = (date) => {
    var current = moment(date).format('MM YYYY');
    setCurrent(current);
    return (
      <View style={styles.header}>
        <Text style={styles.txtCenter}>{'Thg ' + current}</Text>
      </View>
    );
  };

  function addRealMonth(d) {
    var fm = moment(d).add(1, 'M');
    var fmEnd = moment(fm).endOf('month');
    return d.date() != fm.date() && fm.isSame(fmEnd.format('YYYY-MM-DD'))
      ? fm.add(1, 'd')
      : fm;
  }

  const subtractMonth = () => {
    var current = moment(current)
      .format('MM YYYY')
      .subtract(1, 'month');
    setCurrent(current);
    console.log('current: ', current);
  };

  const addMonth = () => {
    var addM = addRealMonth(current);
    console.log('current: ', addM);
    // setCurrent(current);
  };

  const _renderArrow = (direction) => {
    // console.log('direction: ', direction);
    if (direction === 'left') {
      return (
        <TouchableOpacity style={styles.hdLeft}>
          <View style={styles.arrowLeft}>
            <Image
              style={styles.iconLeft}
              source={Images.ic_sign_arrow_right}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.hdRight}>
          <View style={styles.arrowRight}>
            <Image
              style={styles.iconRight}
              source={Images.ic_sign_arrow_right}
            />
          </View>
        </TouchableOpacity>
      );
    }
  };

  useEffect(() => {
    actionSheetRef.current?.setModalVisible();
  }, []);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  const onPress = () => {
    setSelectedItem(3);
  };

  const renderTime = (session) => {
    var item = [],
      oppositeSession = session === 'AM' ? 'PM' : 'AM';

    for (let i = 1, j = 8; i <= 12; i++, j++) {
      const check = session === 'AM' && index === i;
      item.push(
        <TouchableOpacity
          style={styles.timeItem}
          key={i}
          onPress={() => chooseTime(session, i)}
        >
          <View style={[styles.timeContent, check && styles.timeAction]}>
            <Text style={[styles.timeHour, check && styles.txtAction]}>
              {j < 13 ? j : j - 12}
            </Text>
            <Text style={[styles.TimeTail, check && styles.txtAction]}>
              {j < 13 ? session : oppositeSession}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return item;
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        testID={testIDs.calendars.FIRST}
        current={'2020-09-03'}
        style={styles.calendar}
        hideExtraDays
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#e99d23',
            selectedTextColor: '#fff',
          },
        }}
        renderHeader={(date) => _renderHeader(date)}
        enableSwipeMonths={true}
        renderArrow={(direction) => _renderArrow(direction)}
        onPressArrowLeft={() => subtractMonth()}
        onPressArrowRight={() => addMonth()}
        markedDates={{
          '2020-09-16': {
            selected: true,
            marked: true,
            selectedColor: '#e99d23',
          },
          '2020-09-17': { marked: true, dotColor: '#e99d23' },
          '2020-09-18': { marked: true, dotColor: '#e99d23', activeOpacity: 0 },
          '2020-09-19': {
            disabled: true,
            marked: true,
            dotColor: '#e99d23',
            disableTouchEvent: true,
          },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.des}>TimekeepingMonth</Text>

        <TouchableOpacity
          style={styles.openAc}
          onPress={() => {
            actionSheetRef.current?.setModalVisible();
          }}
        >
          <Text style={styles.openText}>Open action sheet</Text>
        </TouchableOpacity>

        {/* date-picker have error with vietnamese */}
        {/* <ActionSheet ref={actionSheetRef} style={styles.actionSheet}>
          <View style={styles.headerAc}>
            <TouchableOpacity style={styles.leftAc}>
              <Text style={styles.textAc}>Hủy</Text>
            </TouchableOpacity>
            <Text style={styles.centerAc}>Chọn ngày</Text>
            <TouchableOpacity style={styles.rightAc}>
              <Text style={{ ...styles.textAc, fontWeight: 'bold' }}>Lưu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentAc}>
            <DatePicker
              style={styles.datePicker}
              date={date}
              onDateChange={setDate}
              mode={'date'}
              locale={'vi'}
              // timeZoneOffsetInMinutes={'vi'}
            />
          </View>
        </ActionSheet> */}

        {/* <ActionSheet ref={actionSheetRef} style={styles.actionSheet}>
          <View style={styles.headerAc}>
            <TouchableOpacity style={styles.leftAc}>
              <Text style={styles.textAc}>Hủy</Text>
            </TouchableOpacity>
            <Text style={styles.centerAc}>Chọn ngày</Text>
            <TouchableOpacity style={styles.rightAc}>
              <Text style={{ ...styles.textAc, fontWeight: 'bold' }}>Lưu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentAc}>
            <View style={[styles.wheel]}>
              <WheelPicker
                onItemSelected={(index) => setSelectedItem(index)}
                data={months}
                indicatorColor={'#ececec'}
              />
            </View>
            <View style={[styles.wheel]}>
              <WheelPicker
                onItemSelected={(index) => setDay(index)}
                data={days}
                indicatorColor={'#ececec'}
              />
            </View>
            <View style={styles.wheel}>
              <WheelPicker
                onItemSelected={(index) => setYear(index)}
                data={years}
                indicatorColor={'#ececec'}
              />
            </View>

            // date picker have error language vietnamese
            <DatePicker
              mode={'date'}
              onTimeSelected={(date) => setDate(date)}
            />
          </View>
        </ActionSheet> */}

        {/* 17.02 */}
        <ActionSheet ref={actionSheetRef} style={styles.actionSheet}>
          <View style={styles.headerAc}>
            <TouchableOpacity style={styles.leftAc}>
              <Text style={styles.textAc}>Hủy</Text>
            </TouchableOpacity>
            <Text style={styles.centerAc}>Chọn ngày</Text>
            <TouchableOpacity style={styles.rightAc}>
              <Text style={{ ...styles.textAc, fontWeight: 'bold' }}>Lưu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentAc_v2}>
            <View style={styles.flexAc}>
              <View style={styles.itemAc}>
                <Text style={styles.topTextAc}>Bắt đầu</Text>
                <TextInput
                  style={styles.inputAc}
                  placeholder={'10:00'}
                  placeholderTextColor={'rgba(149,149,149,0.5)'}
                />
              </View>
              <View style={styles.itemAc}>
                <Text style={styles.topTextAc}>Kết thúc</Text>
                <View style={styles.flexAc}>
                  <TextInput
                    style={styles.inputAc}
                    placeholder={'10:30'}
                    placeholderTextColor={'rgba(149,149,149,0.5)'}
                  />
                  <Image style={styles.ic_refresh} source={Images.ic_refresh} />
                </View>
              </View>
            </View>

            <View>
              <View style={styles.timeAc}>
                <View style={[styles.sunAc, styles.sunAction]}>
                  <Image style={styles.ic_sun} source={Images.ic_sun} />
                </View>
                <View style={styles.renTimeAc}>{renderTime('AM')}</View>
              </View>
              <View style={styles.timeAc}>
                <View style={styles.sunAc}>
                  <Image style={styles.ic_sun} source={Images.ic_mon} />
                </View>
                <View style={styles.renTimeAc}>{renderTime('PM')}</View>
              </View>
            </View>
          </View>
        </ActionSheet>
      </View>
    </View>
  );
};

export default TimekeepingMonth;
