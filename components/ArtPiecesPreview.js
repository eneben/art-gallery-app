import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function ArtPiecesPreview({ piece }) {
  const { imageSource: image, name: title, artist, slug } = piece;

  const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  `;

  const StyledImageSection = styled.figure`
    margin-bottom: 50px;
  `;

  const StyledImageDescription = styled.figcaption`
    color: #fff;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <>
      <StyledLink href={`/art-pieces/${slug}`}>
        <StyledImageSection>
          <StyledContainer>
            <Image
              src={image}
              alt={`This is the image ${title} by ${artist}.`}
              fill
              style={{ objectFit: "cover" }}
            />
          </StyledContainer>
          <StyledImageDescription>
            {`"${title}"`} <br /> {`by ${artist}`}
          </StyledImageDescription>
        </StyledImageSection>
      </StyledLink>
    </>
  );
}
