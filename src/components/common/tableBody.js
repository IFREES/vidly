import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  renderCell = (item, colum) => {
    if (colum.content) return colum.content(item);

    return _.get(item, colum.path);
  };

  createKey = (item, colum) => {
    return item._id + (colum.path || colum.key);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(colum => (
              <td key={this.createKey(item, colum)}>{this.renderCell(item, colum)}</td>
            ))}
          </tr>
        ))}
        <tr>
          <th />
        </tr>
      </tbody>
    );
  }
}
