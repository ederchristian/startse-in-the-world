import styled from 'styled-components'

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding-bottom: var(--small);
  }
`
