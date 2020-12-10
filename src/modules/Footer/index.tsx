import React from "react";
import { Foot, Description, Link, LinkBar } from "./footer.style";

export const Footer = () => {
  return (
    <Foot>
      <Description>
        <Link>More info</Link>
      </Description>
      <LinkBar>
        <Link href="f">About us</Link>
        <Link href="f">lorem</Link>
        <Link href="f">ipsum</Link>
      </LinkBar>
    </Foot>
  );
};
