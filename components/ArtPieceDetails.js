import Image from "next/image";
import styled from "styled-components";

export default function Details({ piece }) {
  const {
    imageSource: image,
    name: title,
    artist,
    year,
    genre,
    colors,
  } = piece;

  const StyledContainer = styled.div`
    position: relative;
    height: 300px;
  `;

  const StyledList = styled.ul`
    list-style: none;
  `;

  const StyledColorSection = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
  `;

  const StyledColorCircle = styled.li`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
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
      <StyledColorSection>
        {colors.map((color) => {
          return <StyledColorCircle key={color} color={color} />;
        })}
      </StyledColorSection>
      <StyledList>
        <li>year: {year}</li>
        <li>genre: {genre}</li>
      </StyledList>
    </>
  );
}
