import Image from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { AUTHOR_PIC_SIZE } from "../../constants"

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  background-color: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-corners);
  margin: 20px 0;

  span {
    display: block;
    margin-top: 8px;
  }
`

export const Profile = styled.div`
  margin: 16px 0 10px;

  ::before {
    content: "";
    width: ${AUTHOR_PIC_SIZE + 8}px;
    height: ${AUTHOR_PIC_SIZE + 8}px;
    position: absolute;
    background-image: url(https://raw.githubusercontent.com/JB1905/portfolio/master/src/images/trianglify.svg);
    background-size: cover;
    margin-left: -4px;
    margin-top: -4px;
    border-radius: 50%;
  }
`

export const AuthorPic = styled(Image)`
  min-width: ${AUTHOR_PIC_SIZE}px;
  height: ${AUTHOR_PIC_SIZE}px;

  img {
    border-radius: 50%;
  }
`

export const Content = styled.p`
  max-width: 500px;
  margin-top: 0;
`

export const BadgeWrapper = styled.span`
  height: 34px;
  display: block;
`

export const SocialMedia = styled.div`
  height: 30px;

  a {
    width: 30px;
    height: 30px;
    margin: 0 3px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: transform 200ms ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }
`

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: var(--primary-color);
`
