// NEU:
import styled from "styled-components";
// import { useState } from "react";
import React, { useState } from "react";

// NEU: see HO react-data-fetching, #: Combine Fetched Data With Local State
// U-St-5_TASK 1: Create an additional state artPiecesInfo
// to save further information for art pieces
// initialize the local state with an empty array

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  const StyledFavoriteButtonComponent = styled.button`
    display: flex;
    border: none;
    margin: 10px 10px;
    margin-left: 30px;
    padding: 5px 5px;
    border-radius: 12px;
    font-size: 1rem;
    background: #ccc;
    color: purple;
  `;
  const StyledPath = styled.path`
    fill: ${(props) => (props.isFavorite ? true : false)};
  `;

  return (
    <StyledFavoriteButtonComponent
      isFavorite={isFavorite}
      type="button"
      onClick={onToggleFavorite}
    >
      {/* {isFavorite ? "remove from favorites" : "add to favorites"} */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </svg>
    </StyledFavoriteButtonComponent>
  );
}
