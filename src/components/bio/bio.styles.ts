import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const BioWrapper = styled.div`
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
  margin: 16px 0;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: calc(var(--author-pic-size) + 8px);
    height: calc(var(--author-pic-size) + 8px);
    background-image: url('/trianglify.svg'); /* TODO replace with gatsby image */
    background-size: cover;
    margin-left: -4px;
    margin-top: -4px;
    border-radius: 50%;
    left: 0;
  }
`

export const AuthorPic = styled(GatsbyImage)`
  min-width: var(--author-pic-size);
  height: var(--author-pic-size);
  border-radius: 50%;
`

export const Content = styled.p`
  max-width: 500px;
  margin-top: 0;
`

export const BadgeWrapper = styled.span`
  height: 34px;
  display: block;
`
