import ArtPiecesPreview from "@/components/ArtPiecesPreview";

import styled from "styled-components";

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

const StyledParagraph = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 30px;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      <StyledHeading>List of All Art Pieces</StyledHeading>
      <StyledParagraph>Click on a image to see more.</StyledParagraph>
      <StyledList>
        {pieces.map((piece) => {
          return (
            <ListItem key={piece.slug}>
              <ArtPiecesPreview
                piece={piece}
                artPiecesInfo={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
              />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}
