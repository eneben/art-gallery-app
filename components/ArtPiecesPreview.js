import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
// NEU:
import React from "react";

export default function ArtPiecesPreview({
  piece,
  artPiecesInfo,
  onToggleFavorite,
  // NEU: nicht sicher:
  isFavorite,
}) {
  console.log("isFavorite: ", isFavorite);

  const { imageSource: image, name: title, artist, slug } = piece;

  const StyledContainer = styled.div`
    position: relative;
    height: 300px;
    margin-top: 50px;
    margin-bottom: 10px;
  `;

  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <figure>
          <StyledContainer>
            <Image
              src={image}
              alt={`This is the image ${title} by ${artist}.`}
              fill
              style={{ objectFit: "contain" }}
            />
          </StyledContainer>
          <figcaption>{`"${title}" by ${artist}`}</figcaption>
        </figure>
      </Link>
      <FavoriteButton />
    </>
  );
}
