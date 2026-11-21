import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 3rem 1.5rem 2rem 1.5rem;
  border-top: 1px solid rgba(133, 76, 230, 0.15);
  background: rgba(23, 23, 33, 0.4);
  z-index: 1;
  position: relative;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 0.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #854ce6;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ed076b;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        © 2026 Priyanka Kalle. All rights reserved.
      </FooterText>
      <FooterText style={{ fontSize: "0.8rem", opacity: 0.75 }}>
        Built with React, Styled-Components & Tailwind CSS
      </FooterText>
      <SocialLinks>
        <SocialLink
          href="https://www.linkedin.com/in/priyanka-kalle-42735b24b/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://github.com/kalle-priyanka"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </SocialLink>
        <SocialLink href="mailto:kallepriya025@gmail.com">
          Email
        </SocialLink>
        <SocialLink
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          Resume (PDF)
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}
