import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { spots: state.garage.spots };
};

const GarageList = ({ spots }) => (
  <ul>
    <li>Garage List</li>
    {spots.map(spot => (
      <li key={spot.id}>
        {spot.name}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(GarageList);

export default List;