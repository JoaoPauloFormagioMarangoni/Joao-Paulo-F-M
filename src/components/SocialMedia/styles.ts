import styled from 'styled-components'

export const SocialMediaStylization = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;

  a {
    font-size: 3rem;
    color: #fff;
    padding: 2px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      color: var(--orange);
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
      background-color: #fff;
    }
  }
`
