import { useRouter } from "next/router";
import Details from "@/components/ArtPieceDetails";
import Link from "next/link";
import styled from "styled-components";

export default function DetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPiece) {
    return <p>...loading</p>;
  }

  const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    border: 2px solid #fff;
    border-radius: 10px;
    background-color: #666;
    padding: 10px;
    display: block;
    width: fit-content;
    margin: 30px 0 50px 0;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <>
      <Details
        piece={currentArtPiece}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
      <StyledLink href="/art-pieces">Go back to art list</StyledLink>
    </>
  );
}
