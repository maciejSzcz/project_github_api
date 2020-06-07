import React from "react";
import PropTypes from "prop-types";

const ViewLaterViewer = ({viewLaterList}) => {
  return (
    <ul>
      {
        viewLaterList.map(item => (
          <li key={item.name}>{item.name}</li>
          
          )
        )
      }
    </ul>
  );
};

ViewLaterViewer.propTypes = {
  viewLaterList: PropTypes.array
}

export default ViewLaterViewer;