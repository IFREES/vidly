import React from "react";
// import PropTypes from "prop-types";

const ListGroup = ({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onItemSelect
}) => {
  const mapGenre = items.map(g => (
    <li
      key={g[valueProperty]}
      onClick={() => onItemSelect(g)}
      className={
        selectedItem === g ? "list-group-item active" : "list-group-item"
      }
    >
      {g[textProperty]}
    </li>
  ));

  return <ul className="list-group">{mapGenre}</ul>;
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

// ListGroup.propTypes = {};

export default ListGroup;
