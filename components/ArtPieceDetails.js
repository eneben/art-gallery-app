import Image from "next/image";
import styled from "styled-components";

export default function Details({ piece }) {
  const { imageSource: image, name: title, artist, year, genre } = piece;

  const StyledContainer = styled.div`
    position: relative;
    height: 300px;
  `;

  const StyledList = styled.ul`
    list-style: none;
  `;

  return (
    <>
      <StyledContainer>
        <Image
          src={image}
          alt={`This is the image ${title} by ${artist}.`}
          fill
          style={{ objectFit: "contain" }}
        />
      </StyledContainer>
      <h1>{`${artist}: "${title}"`}</h1>
      <StyledList>
        <li>year: {year}</li>
        <li>genre: {genre}</li>
      </StyledList>
    </>
  );
}
