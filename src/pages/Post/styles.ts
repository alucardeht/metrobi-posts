import styled from "styled-components";

export const PostCardContainer = styled.div`
  padding: 1.25rem 2rem;
  width: 30rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primary.white};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin-top: 2rem;

  @media (max-width: 600px) {
    width: 20rem;
  }
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

export const PostCardText = styled.div`
  color: ${(props) => props.theme.primary.black};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-decoration: inherit;
  text-transform: inherit;
  opacity: 0.6;
`;
