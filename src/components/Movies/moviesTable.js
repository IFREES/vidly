import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "../common/like";
import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      lable: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like
          onClick={() => this.props.onLikeToggle(movie)}
          liked={movie.liked}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColom } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColom={sortColom}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
