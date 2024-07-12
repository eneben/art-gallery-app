import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import FavoriteButton from "./FavoriteButton";

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
`;

const StyledContainer = styled.div`
  position: relative;
  height: 350px;
  margin: 50px 0;
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

const StyledParagraph = styled.p`
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export default function Details({ piece, artPiecesInfo, onToggleFavorite }) {
  const [isCopied, setIsCopied] = useState(false);
  const [comments, setComments] = useState([]);

  const {
    imageSource: image,
    name: title,
    artist,
    year,
    genre,
    colors,
    slug,
  } = piece;

  const artPiece = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );

  const isFavorite = artPiece?.isFavorite || false;

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

  // handleAddComment
  function handleAddComment(commentText) {
    setComments((prevComments) => [...prevComments, commentText]);
  }

  return (
    <>
      <StyledContainer>
        <Image
          src={image}
          alt={`This is the image ${title} by ${artist}.`}
          fill
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </StyledContainer>
      <StyledHeading>{`${artist}: "${title}"`}</StyledHeading>
      <ButtonWrapper>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(slug)}
        />
        <StyledParagraph>Add to favorites.</StyledParagraph>
      </ButtonWrapper>

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
      <StyledParagraph>
        {isCopied
          ? "The hex value is copied to the clipboard."
          : "By clicking on a color you can copy it to the clipboard."}
      </StyledParagraph>
      <Comments comments={comments} />
      <CommentForm onSubmitComment={handleAddComment} />
    </>
  );
}
