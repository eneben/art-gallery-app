import ArtPiecesPreview from "@/components/ArtPiecesPreview";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  const StyledList = styled.ul`
    margin: 0;
    padding: 0;
  `;

  const ListItem = styled.li`
    list-style: none;
  `;

  const StyledHeading = styled.h1`
    text-align: center;
    margin: 40px 0;
  `;

  return (
    <>
      <StyledHeading>List of all Art Pieces</StyledHeading>
      <StyledList>
        {pieces.map((piece) => {
          return (
            <ListItem key={piece.slug}>
              <ArtPiecesPreview piece={piece} />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}
