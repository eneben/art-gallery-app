import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const StyledImageSection = styled.figure`
  margin-bottom: 50px;
  position: relative;
`;

const StyledImageDescription = styled.figcaption`
  color: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledDescriptionSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ArtPiecesPreview({
  piece,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const { imageSource: image, name: title, artist, slug } = piece;

  const artPiece = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );

  const isFavorite = artPiece?.isFavorite || false;

  return (
    <>
      <StyledImageSection>
        <StyledLink href={`/art-pieces/${slug}`}>
          <StyledContainer>
            <Image
              src={image}
              alt={`This is the image ${title} by ${artist}.`}
              fill
              style={{ objectFit: "cover" }}
              priority={true}
            />
          </StyledContainer>
        </StyledLink>
        <StyledDescriptionSection>
          <StyledImageDescription>
            {`"${title}"`} <br /> {`by ${artist}`}
          </StyledImageDescription>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(slug)}
          />
        </StyledDescriptionSection>
      </StyledImageSection>
    </>
  );
}
