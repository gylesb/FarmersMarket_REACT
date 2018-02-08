import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <div>
      <h3><em>{props.month}</em></h3>
      <h3>{props.selection}</h3>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default Produce;
