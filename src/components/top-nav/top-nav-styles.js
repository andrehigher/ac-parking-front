import styled from 'styled-components';

export const TopNavStyled = styled.div`
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

export const MonthYear = styled.div`
`;

export const DayRange = styled.div`
  display: flex;
  font-size: 37px;
  line-height: 37px;
`;

export const MiddleText = styled.span`
  font-size: 15px;
  padding: 0 10px;
`;

export const PrevWeek = styled.span`
  position: absolute;
  left: 10%;
  top: 55%;
`;

export const LeftArrow = styled.i`
  border: solid #7f7f7f;
  border-width: 0 2px 2px 0;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  cursor: pointer;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const NextWeek = styled.span`
  position: absolute;
  right: 10%;
  top: 55%;
`;

export const RightArrow = styled.i`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  border: solid #7f7f7f;
  border-width: 0 2px 2px 0;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  cursor: pointer;
`;