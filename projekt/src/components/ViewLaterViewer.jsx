import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddLocalRepo from "./AddLocalRepo.jsx"

const ViewLaterViewer = ({viewLaterList, setViewLaterList, filterByName}) => {


  const handleClick = (e) => {
    const name = e.currentTarget.attributes["data-value"].nodeValue;
    setViewLaterList(prevState => {
      return prevState.map(item => {
        return item.name === name ? {...item, detailedView: !item.detailedView} : item
      })
    });
  }

  const deleteItem = (e) => {
    const name = e.currentTarget.attributes["data-value"].nodeValue;
    setViewLaterList([...viewLaterList.filter((listItem) => listItem.name !== name)]);
  }

  return (
    <ul className="ViewLater-Wrapper">
      {
        viewLaterList
          .filter((project) =>{
            return filterByName === ""
              ? project
              : project.name.includes(filterByName)
          })
          .map(item => (
            <li key={item.name}>
              {item.name}
              <Button variant="contained" data-value={item.name} onClick={handleClick}>toggle view</Button>
              <Button variant="contained" data-value={item.name} color="secondary" startIcon={<DeleteIcon />} onClick={deleteItem}>delete</Button>
              {
                item.detailedView === true 
                  ? <p>{item.stargazers_count}</p>
                  : ""
              }
            </li>
            )
          )    
      }
      <AddLocalRepo 
        viewLaterList={viewLaterList}
        setViewLaterList={setViewLaterList}
      />
    </ul>
  );
};

ViewLaterViewer.propTypes = {
  viewLaterList: PropTypes.array, 
  setViewLaterList: PropTypes.func,
  filterByName: PropTypes.string,
}

export default ViewLaterViewer;