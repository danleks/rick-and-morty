import styled from "styled-components";

export const FiltersWrapper = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 1.2rem;
  }
`;
