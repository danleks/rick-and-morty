import styled from "styled-components";

export const StatusIndicator = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ status, theme }) => {
    if (status === "Alive") return theme.colors.green;
    if (status === "Dead") return theme.colors.red;
    return theme.colors.midGrey;
  }};
`;
