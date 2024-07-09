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

  // TEST - das RAUS:
  //   const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { imageSource: image, name: title, artist, slug } = piece;

  return (
    <StyledFavoriteButtonComponent
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      type="button"
      onClick={onToggleFavorite(piece.slug)}
    >
      {isFavorite ? "remove from favourites" : "add to favourites"}
    </StyledFavoriteButtonComponent>
  );
}
