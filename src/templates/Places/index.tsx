import LinkWrapper from 'components/LinkWrapper'

import { CloseOutline } from '@styled-icons/evaicons-outline/closeOutline'

import * as Styled from './styles'

type ImageProps = {
  url: string
  width: number
  height: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Heading>{place.name}</Styled.Heading>
          <Styled.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />
          <Styled.Gallery>
            {place.gallery.map((image, index) => (
              <img key={`photo-${index}`} src={image.url} alt={place.name} />
            ))}
          </Styled.Gallery>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  )
}
