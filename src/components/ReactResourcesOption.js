import React from 'react';
import PropTypes from 'prop-types';

function ReactResourcesOption(props) {
    const { value } = props;
    return <li className="value">{value}</li>;
}

ReactResourcesOption.propTypes = {
    value: PropTypes.string,
}

export default ReactResourcesOption;