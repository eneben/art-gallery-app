import ArtPiecesPreview from "./ArtPiecesPreview";
import styled from "styled-components";

export default function ArtPiecesList({ pieces }) {
  const ListItem = styled.li`
    list-style: none;
  `;

  return (
    <>
      <h1>List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece) => {
          console.log("pieces: ", pieces);

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
