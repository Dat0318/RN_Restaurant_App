import React, {PureComponent} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import type Moment from 'moment';
import Dates from './Dates';
import {ScreenWidth} from '@common/index';

type Props = {
  // Optional prop to pass a custom date to use instead of today
  currentDate?: string | Moment,
  // Callback executed when user taps on a date
  onSelectDate: (date: Moment) => any,
  // Number of days to show before today or custom current date
  showDaysAfterCurrent?: number,
  // Number of days to show after
  showDaysBeforeCurrent?: number,
};

// type State = {
//   // True when all dates have rendered
//   allDatesHaveRendered: boolean,
//   // Currently chosen date index
//   currentDateIndex: ?number,
//   // Store months and years of the dates visible on the screen
//   // for rendering month(s) and year(s) above the dates
//   visibleMonths: ?Array<string>,
//   visibleYears: ?Array<string>,
//   // Array of dates to show
//   dates: Array<Moment>,
//   // Store each day with to help with scrolling to specific days
//   // and calculating which days are visible on the screen
//   dayWidths: ?{|[index: number]: number|},
//   // Store current scroll position
//   scrollPositionX: number,
// };

export default class Calendar extends PureComponent {
  props: Props;

  state: State;

  static defaultProps = {
    // Show 5 days before the current day
    showDaysBeforeCurrent: 50,
    // And after
    showDaysAfterCurrent: 50,
  };

  _scrollView;

  // Initialize the state with default values
  constructor(props: Props) {
    super(props);
    this.state = {
      allDatesHaveRendered: false,
      currentDateIndex: props.showDaysBeforeCurrent,
      dates: this.getDates(),
      dayWidths: undefined,
      scrollPositionX: 0,
      visibleMonths: undefined,
      visibleYears: undefined,
    };
  }

  // Get an array of dates for showing in a horizontal scroll view
  getDates = () => {
    const {
      currentDate,
      showDaysBeforeCurrent,
      showDaysAfterCurrent,
    } = this.props;

    // Go `showDaysBeforeCurrent` ago before today or custom `currentDate`
    const startDay = moment(currentDate || undefined).subtract(
      showDaysBeforeCurrent + 1,
      'days',
    );
    // Number of days in total
    const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;

    // And return an array of `totalDaysCount` dates
    return [...Array(totalDaysCount)].map(_ => startDay.add(1, 'day').clone());
  };

  onSelectDay = (index: number) => {
    const {dates} = this.state;
    const {onSelectDate} = this.props;
    this.setState({currentDateIndex: index});
    onSelectDate(dates[index]);
  };

  onRenderDay = (index: number, width: number) => {
    const {dayWidths} = this.state;
    const {showDaysBeforeCurrent, showDaysAfterCurrent} = this.props;

    // Check whether all date have been rendered already
    const allDatesHaveRendered =
      dayWidths &&
      Object.keys(dayWidths).length >=
        showDaysBeforeCurrent + showDaysAfterCurrent;

    this.setState(prevState => ({
      allDatesHaveRendered,
      dayWidths: {
        // keep all existing widths added previously
        ...prevState.dayWidths,
        // keep the index for calculating scrolling position for each day
        [index]: width,
      },
    }));
  };
  render() {
    const {dates, currentDateIndex} = this.state;
    return (
      <View sytle={styles.calendar}>
        <View style={styles.days}>
          <Text style={styles.item}>T2</Text>
          <Text style={styles.item}>T3</Text>
          <Text style={styles.item}>T4</Text>
          <Text style={styles.item}>T5</Text>
          <Text style={styles.item}>T6</Text>
          <Text style={styles.item}>T7</Text>
          <Text style={styles.item}>CN</Text>
        </View>
        <ScrollView
          ref={scrollView => {
            this._scrollView = scrollView;
          }}
          horizontal={true}
          snapToInterval={ScreenWidth}
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={false} // Do not adjust content automatically
        >
          <Dates
            dates={dates}
            currentDateIndex={currentDateIndex}
            onSelectDay={this.onSelectDay}
            onRenderDay={this.onRenderDay}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: '#ffffff',
  },
  visibleMonthAndYear: {
    color: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 15,
    textAlign: 'left',
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'white',
  },
});
