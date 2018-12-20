import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { fetchCurrent } from '../../actions/garage';
import Spot from '../../components/spot/spot';

const GarageBoard = styled.ul`
  background-color: #ececec;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  padding-top: 20px;
  li {
    list-style-type: none;
  }
`;

const mapStateToProps = state => {
  return {
    spots: state.garage.spots,
    isFetching: state.garage.isFetching,
  };
};

class GarageList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrent());
  }

  render() {
    const { isFetching, spots } = this.props;
    if(isFetching) return <p>Loading...</p>;
    if(!isFetching && !spots) return <p>No data.</p>;

    return (
      <GarageBoard>
        {spots.slice(0,6).map((spot, index) => {
          return <Spot
            key={index+3} 
            num={index+1} 
            id={spot._id} 
            name={spot.name} />
        })}
        {spots.slice(6,12).map((spot, index) => {
          return <Spot 
            key={index+7}
            num={index+7}
            id={spot._id}
            name={spot.name} />
        })}
        {spots.slice(12,18).map((spot, index) => {
          return <Spot 
            key={index+13}
            num={index+13}
            id={spot._id}
            name={spot.name} />
        })}
        {spots.slice(18,24).map((spot, index) => {
          return <Spot 
            key={index+19}
            num={index+19}
            id={spot._id}
            name={spot.name} />
        })}
      </GarageBoard>
    )
  }
}

GarageList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  spots: PropTypes.array,
}

const List = connect(mapStateToProps)(GarageList);

export default List;