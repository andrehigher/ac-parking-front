import React, { Component } from 'react';
import styled from 'styled-components';

const TopNavStyled = styled.div`
  padding: 4px 16px;
  align-items: center;
  background-color: white;
  font-size: 12px;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 1px 1px 1px #d8d8d8;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 9;
`;

const MonthYear = styled.div`
`;

const DayRange = styled.div`
  display: flex;
  font-size: 37px;
  line-height: 37px;
`;

const MiddleText = styled.span`
  font-size: 15px;
  padding: 0 10px;
`;

const PrevWeek = styled.span`
  position: absolute;
  left: 10%;
  top: 55%;
`;

const LeftArrow = styled.i`
  border: solid #7f7f7f;
  border-width: 0 2px 2px 0;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  cursor: pointer;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const NextWeek = styled.span`
  position: absolute;
  right: 10%;
  top: 55%;
`;

const RightArrow = styled.i`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  border: solid #7f7f7f;
  border-width: 0 2px 2px 0;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  cursor: pointer;
`;

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
  
  render() {
    const { from, to } = this.props;
    const date = this.getDateInfo(from, to);
    console.log(date);
    return (
      <TopNavStyled>
        <MonthYear>{date.month} {date.year}</MonthYear>
        <DayRange>
          <PrevWeek><LeftArrow /></PrevWeek>
          {date.dayFrom} <MiddleText>to</MiddleText> {date.dayTo}
          <NextWeek><RightArrow /></NextWeek>
        </DayRange>
      </TopNavStyled>
    );
  }
}

export default TopNav;