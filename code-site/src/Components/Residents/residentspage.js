import React from "react";
import Headline from "./Headline";
import { Container } from "react-bootstrap";
import MemberRectangle from "./MemberRectangle";

export default function residentspage() {
  return (
    <div>
      <Container>
        <Headline
          type="residents"
          subheadline="Come take a look at what our current and former residents are up to.
            CODE hosts 21 students in residence, all of whom have are busy
            helping change the world through technology-based entrepreneurship."
        />
        <MemberRectangle
        color="rgb(107 219 158)" />
        <hr />
        <Headline
          type="alumni"
          subheadline="CODE Graduates are working in a mix of industries, from some of the 
        largest companies in the world to changing the world through startups, large corporations, and 
        social ventures."
        />
      </Container>
    </div>
  );
}
