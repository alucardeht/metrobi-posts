import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostsContainer = styled.div`
  height: 100%;
  width: 25rem;

  @media (max-width: 600px) {
    width: 20rem;
  }
`;

export const PostCard = styled.div`
  height: 30rem;
  width: 100%;
`;

export const PostCardContainer = styled.div`
  padding: 1.25rem 2rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primary.white};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin-top: 2rem;
`;

export const PostCardLinkContainer = styled(Link)`
  text-decoration: none;
`;

export const PostCardTitle = styled.div`
  color: ${(props) => props.theme.primary.black};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 0.0125em;
  text-decoration: inherit;
  text-transform: capitalize;
`;
