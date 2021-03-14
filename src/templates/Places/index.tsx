import Image from 'next/image'
import { useRouter } from 'next/router'

import { NextSeo } from 'next-seo'

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
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - StartSe in the World`}
        description={
          place.description?.text ||
          'StartSe - We are a business school for anyone who wants to transform their future today. Present in Brazil, the USA, China, Israel, and Portugal.'
        }
        canonical="https://ederchristian.com/startse-in-the-world"
        openGraph={{
          url: 'https://ederchristian.com/startse-in-the-world',
          title: `${place.name} - StartSe in the World`,
          description:
            place.description?.text ||
            'StartSe - We are a business school for anyone who wants to transform their future today. Present in Brazil, the USA, China, Israel, and Portugal.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Heading>{place.name}</Styled.Heading>
          <Styled.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <Styled.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </Styled.Gallery>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  )
}
