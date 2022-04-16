import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';

export const HeaderWrapper = styled.div`
  background-color: cornsilk;
  box-shadow:0px 2px 20px -11px #333;
  ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--width-container);
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: calc(var(--space) * 1.3) var(--space);
  position: relative;
  
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`;

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin-right: 0.5rem;
  flex-basis: 170px;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const ButtonMenu = styled.div`
  &.is-active {}
`;

export const NavMenu = styled.div`
  width: 100%;
  display: none;
  ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
    display: block;
  `}
  &.is-active {
    display: block;
  }
`;

export const NavLanguages = styled.div`
  margin-left: var(--space);
`;
