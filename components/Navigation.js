import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  const StyledList = styled.ul`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    margin: 0;
    padding: 0;
    background-color: #3c3c3c;
  `;

  const ListItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33%;
    background-color: ${(props) => (props.active ? "#666" : "#3c3c3c")};
  `;

  const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <nav>
      <StyledList>
        <ListItem active={router.pathname === "/"}>
          <StyledLink href="/">Spotlight</StyledLink>
        </ListItem>
        <ListItem active={router.pathname.startsWith("/art-pieces")}>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </ListItem>
        <ListItem active={router.pathname === "/favorites"}>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </ListItem>
      </StyledList>
    </nav>
  );
}
