import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  const StyledList = styled.ul`
    display: flex;
    justify-content: space-evenly;
  `;

  const ListItem = styled.li`
    list-style: none;
  `;

  return (
    <nav>
      <StyledList>
        <ListItem>
          <Link href="/">Spotlight</Link>
        </ListItem>
        <ListItem>
          <Link href="/art-pieces">Art Pieces</Link>
        </ListItem>
        <ListItem>
          <Link href="/favorites">Favorites</Link>
        </ListItem>
      </StyledList>
    </nav>
  );
}
