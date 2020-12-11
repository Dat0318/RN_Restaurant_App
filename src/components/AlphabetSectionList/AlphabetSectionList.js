'use strict';

import React, { Component } from 'react';
import ReactNative, {
  SectionList,
  StyleSheet,
  View,
  NativeModules,
  Text,
} from 'react-native';
import merge from 'merge';

import RightSectionList from './RightSectionList';

const { UIManager } = NativeModules;

export default class AlphabetSectionList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      offsetY: 0
    };

    this.renderSectionHeader = this.renderSectionHeader.bind(this);

    this.onScroll = this.onScroll.bind(this);
    this.onScrollAnimationEnd = this.onScrollAnimationEnd.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      UIManager.measure(ReactNative.findNodeHandle(this.refs.view), (x, y, w, h) => {
        this.containerHeight = h;
        if (this.props.contentInset && this.props.data && this.props.data.length > 0) {
          this.scrollToSection(Object.keys(this.props.data)[0]);
        }
      });
    }, 0);
  }

  scrollToSection(section) {
    let keys = Object.keys(this.props.data);
    if (typeof (this.props.compareFunction) === "function") {
      keys = keys.sort(this.props.compareFunction);
    }
    const index = keys.indexOf(section);

    this.refs.listview.scrollToLocation({ sectionIndex: index, itemIndex: 0, animated: true });

    this.props.onScrollToSection && this.props.onScrollToSection(section);
  }

  renderSectionHeader({ section: { title } }) {
    return (
      <View style={[styles.sectionHeader, this.props.sectionHeaderStyle]}>
        <Text style={this.props.sectionHeaderTextStyle}>{title}</Text>
      </View>
    )
  }

  onScroll(e) {
    const offsetY = e.nativeEvent.contentOffset.y;
    if (this.props.updateScrollState) {
      this.setState({
        offsetY
      });
    }

    this.props.onScroll && this.props.onScroll(e);
  }

  onScrollAnimationEnd(e) {
    if (this.props.updateScrollState) {
      this.setState({
        offsetY: e.nativeEvent.contentOffset.y
      });
    }
  }

  render() {
    const { data } = this.props;
    let sectionList;
    let dataSource;
    let sections = Object.keys(data);

    if (typeof (this.props.compareFunction) === "function") {
      sections = sections.sort(this.props.compareFunction);
    }

    sectionList = !this.props.hideRightSectionList ?
      <RightSectionList
        style={this.props.rightSectionStyle}
        onSectionSelect={this.scrollToSection}
        sections={sections}
        data={data}
        getSectionListTitle={this.props.getRightSectionListTitle}
        component={this.props.rightSectionListItem}
        fontStyle={this.props.sectionListFontStyle}
      /> :
      null;

    dataSource = data;
    let sectionsListSections = [];
    for (let i = 0; i < sections.length; i++) {
      const alphabet = sections[i];
      const alphabetData = dataSource[alphabet];
      sectionsListSections.push({ title: alphabet, data: alphabetData });
    }

    const renderSectionHeader = this.props.renderSectionHeader ?
      this.props.renderSectionHeader :
      this.renderSectionHeader;

    const props = merge({}, this.props, {
      onScroll: this.onScroll,
      onScrollAnimationEnd: this.onScrollAnimationEnd,
      sections: sectionsListSections,
      renderSectionHeader: renderSectionHeader,
      renderItem: this.props.renderItem,
    });

    props.style = void 0;

    return (
      <View ref="view" style={[styles.container, this.props.style]}>
        <SectionList
          ref="listview"
          keyExtractor={(item, index) => item + index}
          {...props}
        />
        {sectionList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingLeft: 10,
    backgroundColor: '#f1f2f3',
  },
});