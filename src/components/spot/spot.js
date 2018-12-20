import React from 'react';
import styled from 'styled-components';
import carImage from './car.svg';

const SpotStyled = styled.li`
  background-color: transparent;
  border: 0;
  border-top: 4px solid #d8d8d8;
  text-align: center;
  border-radius: 0;
  padding: 12px 0;
  margin: 0 15px;
  justify-content: center;
`;

const SpotCar = styled.div`
  background-image: url(${carImage});
  background-size: 90px 40px;
  width: 90px;
  height: 40px;
  opacity: 0.5;
  margin: 0 auto;
  position: relative;
`;

const SpotNum = styled.span`
  position: absolute;
  top: 20%;
  left: 35%;
  color: white;
`;

const SpotOwner = styled.div`
  white-space: nowrap;
  width: 100%;
  font-size: 15px;
  padding-top: 5px;
`;

const Spot = ({ num, id, name }) => (
  <SpotStyled>
    <SpotCar>
      <SpotNum>{num}</SpotNum>
    </SpotCar>
    <SpotOwner>{name}</SpotOwner>
  </SpotStyled>
);

export default Spot;