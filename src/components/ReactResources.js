import React from 'react';
import PropTypes from 'prop-types';
import OrderedListOption from './OrderedListOption';

function ReactResources() {
    const reactResources = [
        'https://reactrouter.com/',
        'https://reactjs.org/',
        'https://www.npmjs.com/package/react-dom'
    ]
    
    return (
        <ol className="options">
            {reactResources.map( (resource) => <OrderedListOption key={resource} value={resource} />)}
        </ol>
    )
}

ReactResources.propTypes = {
    options: PropTypes.array
}

ReactResources.defaultProps = {
    options: []
}

export default ReactResources