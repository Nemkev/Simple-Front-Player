import styled from "styled-components";

export const Overlap = styled.div`
  height: 100vh;
  overflow: auto;
  background-color: #f2f3f7;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 415px) {
    height: 100%;
  }
`;
export const ListItem = styled.li`
  list-style-type: none;
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  border-radius: 3%;
  font-size: 1em;
  width: 40vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 415px) {
    width: 80vw;
  }
`;

export const SearchList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
