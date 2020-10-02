import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialMediaWrapper = styled.div`
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

    svg {
      max-width: 1em;
    }
  }
`

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: var(--primary-color);
`
