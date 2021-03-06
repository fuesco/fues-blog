import styled, {css} from "styled-components";
import {Container} from "../common";
import Theme from "../../styles/theme";
import {Link} from "gatsby";

export const StyledFooter = styled.footer`
  max-width: 100%;
  padding: 10px 0;
  z-index: 700;
  position: relative;
  font-size: .9em;
  margin-top: 50px;
`;

export const FooterContainer = styled(Container)`
  text-align: right;
  line-height: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  margin: 0;
`;

export const DesignBy = styled.p`
  margin: 1rem 0;
  font-size: 14px;

  a {
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: ${Theme.layout.primaryColor};
    opacity: 0.9;
    transition: all 0.6s ease-in-out; 
    &:hover {
      opacity: 1;
    }
    span {
      color: #000;
    }
  }
`;

export const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    display: inline-block;
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const LinkStyle = css`
  color: #000;
  text-decoration: none;
`;

export const FooterMenuItem = styled.a`
  ${LinkStyle}
`;

export const FooterMenuLink = styled(Link)`
  ${LinkStyle}
`;
