import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const PaginationStyles = styled(ReactPaginate)`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 2rem;
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  a {
    padding: 5px 8px;
    cursor: pointer;

    &:hover,
    &[aria-current="page"] {
      padding: 5px 8px;
      background-color: ${({ theme }) => theme.colors.orange};
      border-radius: 3px;
    }
  }
`;
