import React from 'react';

import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://www.facebook.com/mongolianschoolofcolorado.org/"
          title="Facebook"
          target="_blank"
        >
          <Facebook />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
