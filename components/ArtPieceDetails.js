import Image from "next/image";

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
          onClick={handleClick}
          src={image}
          alt={`This is the image ${title} by ${artist}.`}
          fill
          style={{ objectFit: "contain" }}
        />
      </StyledContainer>
      <StyledList>
        <li>{`${artist}: "${title}"`}</li>
        <li>year: {year}</li>
        <li>genre: {genre}</li>
      </StyledList>
    </>
  );
}
