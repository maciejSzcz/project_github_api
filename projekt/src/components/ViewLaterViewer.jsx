import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const ViewLaterViewer = ({viewLaterList, setViewLaterList}) => {

  const handleClick = (e) => {
    const name = e.target.parentElement.attributes["data-value"].nodeValue;
    setViewLaterList(prevState => {
      return prevState.map(item => {
        return item.name === name ? {...item, detailedView: !item.detailedView} : item
      })
    });
  }

  return (
    <ul className="ViewLater-Wrapper">
      {
        viewLaterList.map(item => (
          <li key={item.name}>
            {item.name}
            <Button variant="contained" data-value={item.name} onClick={handleClick}>toggle view</Button>
            <Button variant="contained">delete</Button>
            {
              item.detailedView === true 
                ? <p>{item.created_at}</p>
                : ""
            }
          </li>
          )
        )
      }
    </ul>
  );
};

ViewLaterViewer.propTypes = {
  viewLaterList: PropTypes.array, 
  setViewLaterList: PropTypes.func
}

export default ViewLaterViewer;