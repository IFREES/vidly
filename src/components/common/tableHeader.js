import React, { Component } from "react";

export default class TableHeader extends Component {
  raisSort = path => {
    const sortColom = { ...this.props.sortColom };
    if (sortColom.path === path) {
      sortColom.order = sortColom.order === "asc" ? "desc" : "asc";
    } else {
      sortColom.path = path;
      sortColom.order = "asc";
    }
    this.props.onSort(sortColom);
  };

  renderSortIcon = colum => {
    const { path, order } = this.props.sortColom;
    if (colum.path !== path) return null;
    if (order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(colum => (
            <th
              className="clickable"
              key={colum.path || colum.key}
              onClick={() => this.raisSort(colum.path)}
            >
              {colum.lable} {this.renderSortIcon(colum)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
