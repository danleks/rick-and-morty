import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.8rem;
    text-transform: capitalize;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }

    &.active {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
