import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(-60px + 50vh);
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: center;

  @media (min-width: 651px) {
    font-size: 6.8rem;
  }

  @media (min-width: 891px) {
    font-size: 7rem;
  }
`;
