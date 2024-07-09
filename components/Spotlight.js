import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({ image, artist }) {
  const SpotlightComponent = styled.div`
    position: relative;
    height: 300px;
    margin-bottom: 30px;
  `;

  const StyledHeading = styled.h1`
    display: block;
    margin-left: 30px;
  `;

  const StyledFigcaption = styled.figcaption`
    /* display: block; */
    margin-left: 30px;
  `;

  return (
    <>
      <StyledHeading>Art GALLERY</StyledHeading>
      <SpotlightComponent>
        <Image
          src={image}
          alt={`by ${artist}`}
          fill
          style={{ objectFit: "contain" }}
        />
      </SpotlightComponent>
      <StyledFigcaption>{` by ${artist}`}</StyledFigcaption>
      <FavoriteButton />
    </>
  );
}
