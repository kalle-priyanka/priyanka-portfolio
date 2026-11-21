import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 10;
  position: relative;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Logo = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const LogoTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 0.5px;
`;

const LogoSubtitle = styled.span`
  font-size: 0.8rem;
  color: #854ce6;
  font-weight: 500;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #854ce6;
  }
`;

const ResumeButton = styled.a`
  background: linear-gradient(135deg, #854ce6, #ed076b);
  color: white;
  padding: 0.55rem 1.25rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(133, 76, 230, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(133, 76, 230, 0.6);
  }
`;

export default function Header() {
  const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf";
  return (
    <Nav>
      <Logo href="#home">
        <LogoTitle>Priyanka Kalle</LogoTitle>
        <LogoSubtitle>Embedded Software Engineer</LogoSubtitle>
      </Logo>
      <NavLinks>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink
          href="https://www.linkedin.com/in/priyanka-kalle-42735b24b/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </NavLink>
        <NavLink
          href="https://github.com/kalle-priyanka"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </NavLink>
        <ResumeButton
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Resume (PDF)
        </ResumeButton>
      </NavLinks>
    </Nav>
  );
}
