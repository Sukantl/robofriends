import React from 'react';

// props
// state 
// Children

        // every props element are children
const Scroll = (props) => {
      return (
          // {{}} double crily means this is a javascript object retirning a object
          <div style={{overflowY: 'Scroll',border: '5px solid black', height: '500px'}}>
              {props.children}
          </div>
      );
};

export default Scroll;