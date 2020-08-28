import React from 'react';

import PropTypes from 'prop-types';

import ReactResourcesOption from './ReactResourcesOption';

function ReactResources(props) {
  const { options } = props;
  if (!options.length) {
    return <span className="empty">Nothing to see here. Move along.</span>;
  }

  return (
    <ol className="options">
      {options.map(option => <ReactResourcesOption key={option} value={option} />)}
    </ol>
  );
}

ReactResources.propTypes = {
  options: PropTypes.array,
};

ReactResources.defaultProps = {
  options: [],
};

export default ReactResources
