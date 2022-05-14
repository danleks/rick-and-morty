import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  height: 30vh;
  padding: 6rem;
  background-color: ${({ theme }) => theme.colors.darkBlack};

  ul {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    list-style: none;

    @media (min-width: 515px) {
      flex-direction: row;
    }
  }

  li {
    display: flex;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;
