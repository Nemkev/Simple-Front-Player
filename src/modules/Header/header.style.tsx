import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5fa;
  border-bottom: 1px #ff8b38 solid;
  padding-top: 20px;
  color: gray;
  padding-bottom: 20px;
  font-size: 1.1em;
`;

export const Logo = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
`;

export const RouterBar = styled.div`
  flex-grow: 5;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  align-items: center;
`;

export const CiteName = styled.h1`
  font-size: 1.3em;
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 0 10px;
  color: gray;
`;

export const Hamburger = styled.span`
  font-size: 30px;
  margin-right: 15px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.span`
  float: right;
  color: black;
  font-size: 26px;
  line-height: 20px;
  margin-top: 10px;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const RouteBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const RouteWay = styled.a`
  text-decoration: none;
  color: #4cd3aa;
  padding: 8px;
  cursor: pointer;
`;

export const SidebarName = styled.h2`
  margin-left: 13px;
  margin-top: 10px;
`;
