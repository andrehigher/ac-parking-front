import React, { Component } from 'react';

import { fetchNext, fetchPrev } from '../../actions/garage';
import { 
  TopNavStyled,
  MonthYear,
  DayRange,
  MiddleText,
  PrevWeek,
  LeftArrow,
  NextWeek,
  RightArrow,
} from './top-nav-styles';

class TopNav extends Component {

  getDateInfo(from, to) {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const date = {
      dayFrom: fromDate.getDate(),
      dayTo: toDate.getDate(),
      month: fromDate.toLocaleString("en-us", { month: "long" }),
      year: fromDate.getFullYear()
    }
    return date;
  }

  getNextWeek() {
    const { dispatch } = this.props;
    dispatch(fetchNext());
  }

  getPrevWeek() {
    const { dispatch } = this.props;
    dispatch(fetchPrev());
  }
  
  render() {
    const { from, to } = this.props;
    const date = this.getDateInfo(from, to);
    console.log(date);
    return (
      <TopNavStyled>
        <MonthYear>{date.month} {date.year}</MonthYear>
        <DayRange>
          <PrevWeek><LeftArrow onClick={this.getPrevWeek.bind(this)} /></PrevWeek>
          {date.dayFrom} <MiddleText>to</MiddleText> {date.dayTo}
          <NextWeek><RightArrow onClick={this.getNextWeek.bind(this)} /></NextWeek>
        </DayRange>
      </TopNavStyled>
    );
  }
}

export default TopNav;