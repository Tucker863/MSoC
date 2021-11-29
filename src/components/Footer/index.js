import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    contributeMessage,
    
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {aboutProject}{' '}
          <a
            href="https://www.facebook.com/mongolianschoolofcolorado.org/"
            target="_blank"
          >
            {seeMorePWA}
          </a>
        </p>
        <p>{contributeMessage}{' '}
          <p
          >
            © 2021
          </p>
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
