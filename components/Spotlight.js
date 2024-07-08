import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  const SpotlightComponent = styled.div`
    position: relative;
    height: 300px;
  `;

  const StyleHeading = styled.h1`
    display: block;
  `;
  return (
    <>
      <SpotlightComponent>
        <StyleHeading>Art GALLERY</StyleHeading>
        <Image
          src={image}
          alt={`by ${artist}`}
          fill
          style={{ objectFit: "contain" }}
        />
      </SpotlightComponent>
      <figcaption>{` by ${artist}`}</figcaption>
    </>
  );
}
