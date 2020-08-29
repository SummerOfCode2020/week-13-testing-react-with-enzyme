import React from 'react';
import PropTypes from 'prop-types';
import ReactResourcesOption from './ReactResourcesOption';

function reactResources(props) {
    const { options } = props;
    if (!options.length) {
        return <span className="empty">Nothing to see here. Move along.</span>;
    }

    return (
        <ol className='options'>
            {options.map( option => <ReactResourcesOption key={option} value={option}
            />)}
        </ol>
    )
}

reactResources.propTypes = {
    options: PropTypes.array
}

reactResources.defaultProps = {
    options: []
}

export default reactResources