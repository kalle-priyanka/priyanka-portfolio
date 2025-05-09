import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 4rem 1rem;
  z-index: 1;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #854ce6;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Role = styled.span`
  font-size: 1.25rem;
  color: #854ce6;
`;

const Description = styled.p`
  max-width: 600px;
  margin-top: 1rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
`;

export default function HeroSection() {
  return (
    <HeroContainer>

     
<ProfileImage src={`${process.env.PUBLIC_URL}/images/face.jpg`} alt="Priyanka's face" />

 

      <Name>K Priyanka</Name>
      <Role>
        <Typewriter
          words={[
            "an Undergraduate",
            "a Python Developer",
            "a Web Programmer",
            "a Coder",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </Role>
      <Description>
        Innovative and results-driven Computer Science Engineer with hands-on expertise in full-stack
        development, embedded systems, and real-time applications. Skilled in designing scalable solutions and
        integrating cutting-edge technologies. Seeking to contribute technical proficiency and problem-solving
        capabilities to a dynamic, growth-oriented organization.
      </Description>
    </HeroContainer>
  );
}
