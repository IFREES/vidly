import React from "react";

const MovieForm = ({ match, history }) => {
  const handleClick = () => {
    history.replace("/");
  };

  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button onClick={handleClick} className="btn btn-primary">
        Save
      </button>
    </div>
  );
};

export default MovieForm;
