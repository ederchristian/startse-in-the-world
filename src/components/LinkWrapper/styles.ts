import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // bigger than Leaflet
  top: var(--small);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  &:hover {
    svg {
      color: var(--highlight);
    }
  }

  svg {
    transition: all 0.3s ease-in-out;
  }
`
