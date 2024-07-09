import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  const SpotlightComponent = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  `;

  const StyledHeading = styled.h1`
    text-align: center;
    margin: 40px;
  `;

  const StyledImageDescription = styled.figcaption`
    color: #fff;
    margin-bottom: 50px;
  `;

  return (
    <>
      <StyledHeading>Art GALLERY</StyledHeading>

      <SpotlightComponent>
        <Image
          src={image}
          alt={`by ${artist}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </SpotlightComponent>
      <StyledImageDescription>{` by ${artist}`}</StyledImageDescription>
    </>
  );
}
