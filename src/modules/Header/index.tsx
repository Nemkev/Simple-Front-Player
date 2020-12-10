import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
// import { AUTH } from "../../query/AUTH";
// import { UNLOGIN } from "../../mutation/UNLOGIN";
import {
  Head,
  Logo,
  CiteName,
  Hamburger,
  NavMenu,
  DeleteButton,
  RouteBar,
  RouteWay,
  SidebarName,
} from "./header.style";

export const Header = () => {
  const [logged, setLogged] = useState("Sing in");
  // const { loading, error, data } = useQuery(AUTH);
  const stylePreset = { textDecoration: "none", marginTop: "20px" };
  const [sidebarState, setSidebarState] = useState(false);
  const [visible, setVisible] = useState("hidden");

  // useEffect(() => {
  //   if (data && !data.auth) {
  //     setLogged("Sign in");
  //   } else {
  //     setLogged("Sign out");
  //   }
  // }, [data]);

  // const [unLogged] = useMutation(UNLOGIN);

  // const logOut = async () => {
  //   await unLogged();
  // };

  const onSetSidebarOpen = () => {
    setVisible("hidden");
    setSidebarState(false);
  };

  const style = {
    sidebar: {
      background: "white",
      width: "300px",
    },
    overlay: {
      zIndex: "1",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      opacity: "0",
      visibility: "hidden",
      transition: "opacity .3s ease-out, visibility .3s ease-out",
      backgroundColor: "rgba(0,0,0,.3)",
    },
    root: {
      position: "fixed",
      visibility: `${visible}`,
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      overflow: "hidden",
    },
    dragHandle: {
      zIndex: "1",
      position: "fixed",
      top: "0",
      bottom: "0",
    },
  };

  return (
    <Head>
      <Sidebar
        sidebar={
          <>
            <NavMenu>
              <SidebarName>Navigation</SidebarName>
              <DeleteButton
                onClick={(e) => {
                  e.preventDefault();
                  setVisible("hidden");
                  setSidebarState(false);
                }}
              >
                +
              </DeleteButton>
            </NavMenu>
            <RouteBar>
              <Link to="/users" style={stylePreset}>
                <RouteWay>Users</RouteWay>
              </Link>
              <Link to="/concerts" style={stylePreset}>
                <RouteWay>Concerts</RouteWay>
              </Link>
              <Link to="/buildings" style={stylePreset}>
                <RouteWay>Buildings</RouteWay>
              </Link>
              <Link to="/rooms" style={stylePreset}>
                <RouteWay>Rooms</RouteWay>
              </Link>
              <Link to="/additional" style={stylePreset}>
                <RouteWay>Additional</RouteWay>
              </Link>
              <Link
                to="/login"
                style={stylePreset}
                // onClick={logOut}
              >
                <RouteWay>Log Out</RouteWay>
              </Link>
            </RouteBar>
          </>
        }
        open={sidebarState}
        styles={style}
        onSetOpen={onSetSidebarOpen}
      />
      <Logo>
        <CiteName>Ticket paradise</CiteName>
        <Hamburger
          onClick={(e) => {
            e.preventDefault();
            setVisible("visible");
            setSidebarState(true);
          }}
        >
          &#9776;
        </Hamburger>
      </Logo>
    </Head>
  );
};
