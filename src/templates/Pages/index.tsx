import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as Styled from './styles'

const PageTemplate = () => (
  <Styled.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <Styled.Heading>StartSe in the World</Styled.Heading>
    <Styled.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum libero
        cumque alias odio aspernatur expedita adipisci quibusdam doloribus odit
        velit et sequi nulla voluptatibus quis aliquam, obcaecati nemo, vero
        illum.
      </p>
    </Styled.Body>
  </Styled.Content>
)

export default PageTemplate
