import dynamic from 'next/dynamic'

import { NextSeo } from 'next-seo'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'

import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="StartSe in the World"
        description="StartSe - We are a business school for anyone who wants to transform their future today. Present in Brazil, the USA, China, Israel, and Portugal."
        canonical="https://startse-in-the-world.vercel.app"
        openGraph={{
          url: 'https://startse-in-the-world.vercel.app',
          title: 'StartSe in the World',
          description:
            'StartSe - We are a business school for anyone who wants to transform their future today. Present in Brazil, the USA, China, Israel, and Portugal.',
          images: [
            {
              url: 'https://startse-in-the-world.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'StartSe in the World'
            }
          ],
          site_name: 'StartSe in the World'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
