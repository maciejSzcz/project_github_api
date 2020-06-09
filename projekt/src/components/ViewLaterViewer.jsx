import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import AddLocalRepo from "./AddLocalRepo.jsx"
import DetailedView from "./DetailedView.jsx"

const ViewLaterViewer = ({viewLaterList, setViewLaterList, filterByName, sorting}) => {

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
          .sort((a, b) => {
            return sorting === true
              ? b.stargazers_count - a.stargazers_count
              : 0
          })
          .filter((project) =>{
            return filterByName === ""
              ? project
              : project.name.includes(filterByName)
          })
          .map(item => (
            <li key={item.name}>
              <Paper variant="outlined">
                {item.name}
                <Button variant="contained" data-value={item.name} onClick={handleClick}>toggle view</Button>
                {
                  item.detailedView === true 
                    ? <DetailedView project={item} deleteItem={deleteItem} setViewLaterList={setViewLaterList} />
                    : ""
                }
              </Paper>
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
  sorting: PropTypes.bool,
}

export default ViewLaterViewer;