import React from 'react';

// this component takes an image url, and fits the entire
// width and height of its container.
export default ({imageUrl}) => (
      <React.Fragment>
        <img src={imageUrl}
             className="media"/>
      </React.Fragment>
);
