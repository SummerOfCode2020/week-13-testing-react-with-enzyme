import PropTypes from "prop-types";
import React from 'react';


function ReactResources(props) {
  
  if (!props.urlLinks) {
    return (
      <span className="empty">Do you have no resources to share? Lame.</span>
    );
  }
  return (
    <table className="reactResources">
      <tr className="headerRow">
        <th>Name</th>
        <th>URL</th>
      </tr>
      {props.urlLinks.map((Resource) => (
        <tr key={Resource.Name}>
          <th>{Resource.name}</th>
          <th>
            <a key={Resource.Name} href={Resource.URL}>
              {Resource.URL}
            </a>
          </th>
        </tr>
      ))}
    </table>
  );
}

ReactResources.propTypes = {
  urlList: PropTypes.array,
};

ReactResources.defaultProps = {
  urlList: [],
};

export default ReactResources;
