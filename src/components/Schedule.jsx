import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return (
    <div>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3><em>{props.booth}</em></h3>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
