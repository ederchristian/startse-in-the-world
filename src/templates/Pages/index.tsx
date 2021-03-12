import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as Styled from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Styled.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <Styled.Heading>{heading}</Styled.Heading>
    <Styled.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Styled.Body>
  </Styled.Content>
)

export default PageTemplate
