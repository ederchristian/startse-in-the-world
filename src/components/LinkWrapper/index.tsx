import Link from 'next/link'

import * as Styled from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <Styled.Wrapper>
    <Link href={href}>{children}</Link>
  </Styled.Wrapper>
)

export default LinkWrapper
