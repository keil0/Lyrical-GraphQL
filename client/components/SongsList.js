import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongsList = ({ data }) => {
  if (data.loading) return <div>Loading</div>;

  const renderSongs = () =>
    data.songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));

  return <ul className="collection">{renderSongs()}</ul>;
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongsList);
