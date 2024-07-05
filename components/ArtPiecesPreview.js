import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecesPreview({ piece }) {
  const { imageSource: image, name: title, artist } = piece;

  const StyledContainer = styled.div`
    position: relative;
    height: 300px;
  `;

  return (
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
  );
}
