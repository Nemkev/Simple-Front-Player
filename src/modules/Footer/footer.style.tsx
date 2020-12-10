import styled from "styled-components";

export const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5fa;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px #ff8b38 solid;
  font-size: 1.05em;
`;
export const Description = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;
export const Link = styled.a`
  text-decoration: none;
  color: gray;
`;
export const LinkBar = styled.div`
  flex-grow: 5;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  align-items: center;
`;
