import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const CharacterWrapper = styled.ul`
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
`;
