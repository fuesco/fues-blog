import styled from "styled-components";
import Theme from "../../styles/theme";
import {Link} from "gatsby";

export const TagContainer = styled.section`
  background-color: #fff;
  border-top: 1px #e5eff5 solid;
  border-bottom: 1px #e5eff5 solid;
  padding: 40px;
  margin-top: 75px;
  text-align: center;
`;

export const TagListTitle = styled.h2`
  margin: 0 0 40px;
`;

export const StyledTagList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media (max-width: ${Theme.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const StyledTag = styled.li`
  margin: 0 35px;
  transition: .5s all;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: ${Theme.breakpoints.sm}) {
    width: 50%;
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TagIcon = styled.img`
  max-height: 55px;
`;

export const TagName = styled.span`
  display: block;
`;

export const TagArchiveLinkWrapper = styled.div`
  display: block;
  margin-top: 20px;
`;

export const TagArchiveLink = styled(Link)`
  transition: all 0.2s ease-in-out;
  background-color: ${Theme.layout.linkColor};
  border: 1px solid ${Theme.layout.linkColor};
  color: #f5f5f5;
  padding: 6px 12px;
  border-radius: 0.25rem;
  font-size: .8em;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`;
