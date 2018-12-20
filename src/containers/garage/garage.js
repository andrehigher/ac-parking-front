import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCurrent } from '../../actions/garage';


const mapStateToProps = state => {
  console.log(state);
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
      <ul>
        <li>Garage List</li>
        {/* {spots.map(spot => (
          <li key={spot.id}>
            {spot.name}
          </li>
        ))} */}
      </ul>
    )
  }
}

const List = connect(mapStateToProps)(GarageList);

export default List;