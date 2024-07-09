import ArtPiecesPreview from "@/components/ArtPiecesPreview";

import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  const ListItem = styled.li`
    list-style: none;
  `;

  return (
    <>
      <h1>List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece) => {
          return (
            <ListItem key={piece.slug}>
              <ArtPiecesPreview piece={piece} />
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}
