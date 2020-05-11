import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    <NavList>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
    </NavList>
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0 0 2px;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 12px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  display: inline-block;

  & > a {
    /* display: inline-block; */
    padding: 0 2px;
    line-height: 2em;
    /* border-bottom: 2px solid;
     border-bottom-color: transparent; */
    /* Use for semantic approach to style the current link */
    /* &[aria-current="page"] {
      border-bottom-color: #fff;
    } */
  }

  &:first-of-type {
    margin-left: 0;
  }
/*
  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  } */

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: #1f38c5;
  }
`;
