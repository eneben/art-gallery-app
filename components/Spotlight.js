import ArtPiecesPreview from "./ArtPiecesPreview";
import Image from "next/image";
import styled, { css } from "styled-components";

export default function Spotlight({ image, artist, StyledContainer }) {
  const SpotlightComponent = styled.div`
    position: relative;
    height: 300px;
    justify-content: space-between;
  `;

  const StyledHeading = styled.h1`
    padding: 20px;
  `;

  return (
    <>
      <figure>
        <StyledHeading>Art GALLERY</StyledHeading>
        <SpotlightComponent>
          <Image
            src={image}
            alt={`by ${artist}.`}
            fill
            style={{ objectFit: "contain" }}
          />
        </SpotlightComponent>
        <figcaption>{`by ${artist}`}</figcaption>
      </figure>
    </>
  );
}
