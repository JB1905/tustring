import { SocialMediaWrapper, SocialMediaIcon } from './social-media.styles'

import type { SocialMediaItem } from '../../types/SocialMediaItem'

interface Props {
  readonly items: SocialMediaItem[]
}

const SocialMedia = ({ items }: Props) => (
  <SocialMediaWrapper>
    {items.map(({ href, name, icon }) => (
      <a href={href} aria-label={name} key={name}>
        <SocialMediaIcon icon={icon} />
      </a>
    ))}
  </SocialMediaWrapper>
)

export default SocialMedia
