import React from "react";
import { connect, styled } from "frontity";
import Link from "./link"

const Footer = ({ state }) => {
    return (
        <>
        <Container>
          This is the footer
          <NavContainer>
          <ul>
          {state.theme.footermenu.map(([name, link]) => {
                return (
                    <li key={name}>
                    <Link link={link} >
                      {name}
                    </Link>
                    </li>
                );
              }
            )
          }
          </ul>
        </NavContainer>
        </Container>
        </>
    );
};

export default connect(Footer);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;