import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <div>
      <h3><em>{props.month}</em></h3>

      <ul>
        {props.selection.map((produce, index) =>
        <li>{produce}</li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Produce;
