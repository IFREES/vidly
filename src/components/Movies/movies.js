import React, { Component } from "react";
import _ from "lodash";
import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import MoviesTable from "./moviesTable";
import { getMovies } from "../../services/fakeMovieService";
import { paginate } from "../../utils/paginate";
import { getGenres } from "../../services/fakeGenreService";

export default class movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortColom: { path: "title", order: "asc" },
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "All Genres" }, ...getGenres()];

    this.setState({ genres, movies: getMovies() });
  }

  handleDeleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLikeToggle = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColom => {
    this.setState({ sortColom });
  };

  getPagedData = () => {
    const {
      selectedGenre,
      pageSize,
      currentPage,
      sortColom,
      movies: allMovies
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre.name !== "All Genres"
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColom.path], [sortColom.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      genres,
      selectedGenre,
      pageSize,
      currentPage,
      sortColom
    } = this.state;

    if (count === 0) return <p>Es sind Keine Filme in der Datenbank</p>;
    const { totalCount, data: movies } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            selectedItem={selectedGenre}
            items={genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Es werden {totalCount} filme angezeigt</p>
          <MoviesTable
            sortColom={sortColom}
            onSort={this.handleSort}
            onLikeToggle={this.handleLikeToggle}
            onDelete={this.handleDeleteMovie}
            movies={movies}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
