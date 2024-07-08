import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Details({ piece }) {
  const [isCopied, setIsCopied] = useState(false);

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
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `;

  async function handleColorClick(color) {
    try {
      await navigator.clipboard.writeText(color);
      setIsCopied(true);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIsCopied(false);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [isCopied]);

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
        <li>colors:</li>
      </StyledList>
      <StyledColorSection>
        {colors.map((color) => {
          return (
            <StyledColorCircle
              key={color}
              color={color}
              onClick={() => handleColorClick(color)}
            />
          );
        })}
      </StyledColorSection>
      <p>
        {isCopied
          ? "The hex value of the clicked color is copied to the clipboard."
          : "By clicking on a color you can copy it to the clipboard."}
      </p>
    </>
  );
}
