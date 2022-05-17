import { Link } from "react-router-dom";
import styled from "styled-components";

export const CharacterWrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  overflow: hidden;
  text-decoration: none;

  @media (min-width: 651px) {
    width: 60rem;
    height: 21rem;
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  flex: 1 1 0%;

  @media (min-width: 651px) {
    flex: 2 1 0%;
  }

  img {
    width: 100%;
    height: 30rem;
    display: inline-block;
    object-fit: cover;
    object-position: center center;

    @media (min-width: 651px) {
      height: 100%;
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 3 1 0%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.75rem;
`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.8;
  }

  // starting from 2nd div select 1st span element
  &:not(:first-child) > span:first-of-type {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.midGrey};
  }
`;

export const StatusWrapper = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const LinkStyles = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const ButtonStyles = styled.button`
  align-self: flex-start;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
  background-color: black;
  padding: 10px;
  border: none;
  &[disabled] {
    cursor: not-allowed;
    background-color: grey;
    color: white;
  }
`;
