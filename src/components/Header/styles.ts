import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;

  nav {
    box-shadow: 0px 0px 10px var(--orange);
    position: absolute;
    background: var(--background);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s;
    overflow: hidden;

    .iconMenu {
      width: 100%;
      height: 100%;
      margin: auto;
      color: var(--blackAndWhite);
    }

    &:hover {
      width: 350px;
      height: 250px;
      top: -155px;

      .iconMenu {
        display: none;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin: 170px 0 10px 0;

    li {
      cursor: pointer;
      position: relative;

      a {
        text-decoration: none;
        color: var(--blackAndWhite);
      }

      &::after {
        content: '';
        width: 0;
        height: 2px;
        position: absolute;
        left: 100%;
        top: 0;
        background-color: var(--orange);
        transition: all 0.2s;
      }
      &::before {
        content: '';
        width: 0;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: var(--orange);
        transition: all 0.2s;
      }

      &:hover {
        &::after {
          content: '';
          width: 100%;
          left: 0;
        }
        &::before {
          content: '';
          width: 100%;
        }
      }
    }
  }
`

export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;

  select {
    border-radius: 999px;
    padding: 3px 15px;
    font-size: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`
