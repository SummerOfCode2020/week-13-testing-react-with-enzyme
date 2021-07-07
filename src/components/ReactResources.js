import React from 'react';
import PropTypes from 'prop-types';


function ReactResources (props) {
    const { links } = props;
    if (!links.length) {
        return <span className="empty">Sad and empty, need more resources!</span>;
    }

    return (
        <ol className="links">
            {links.map(option => <ReactResources key={link} value={link} />)}
        </ol>
    );
}

// https://reactjs.org/

