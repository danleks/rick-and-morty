import styled from "styled-components";

export const DetailsWrapper = styled.section`
  height: 50vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: -6rem;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${({ theme }) => theme.colors.black};

  img {
    display: inline-block;
    width: 100%;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 5rem;

  @media (min-width: 439px) {
    flex-direction: row;
    gap: 10rem;
  }

  div {
    display: flex;
    flex-direction: column;

    // select 1st span element for each div
    & > span:first-of-type {
      color: ${({ theme }) => theme.colors.midGrey};
      font-size: 10px;
    }
  }
`;

export const BackButtonStyles = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  text-decoration: none;
  cursor: pointer;
`;
