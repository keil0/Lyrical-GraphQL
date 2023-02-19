import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import fetchSongs from "../queries/fetchSongs";

const SongsList = ({ data, mutate }) => {
  if (data.loading) return <div>Loading</div>;

  const onSongDelete = (id) => {
    mutate({ variables: { id } });
  };

  const renderSongs = () =>
    data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i className="material-icons" onClick={() => onSongDelete(id)}>
          delete
        </i>
      </li>
    ));

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongs)(SongsList));
