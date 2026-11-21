import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 3rem 1.5rem 4rem 1.5rem;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  border: 3.5px solid #854ce6;
  box-shadow: 0 0 30px rgba(133, 76, 230, 0.45);
  margin-bottom: 1.25rem;
`;

const Name = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 2.1rem;
  }
`;

const RoleContainer = styled.div`
  font-size: 1.35rem;
  font-weight: 600;
  color: #854ce6;
  min-height: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const LocationTag = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1.25rem;
`;

const Description = styled.p`
  max-width: 740px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  background: linear-gradient(135deg, #854ce6, #ed076b);
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 18px rgba(133, 76, 230, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(133, 76, 230, 0.65);
  }
`;

const SecondaryBtn = styled.a`
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.text_primary};
  border: 1.5px solid rgba(133, 76, 230, 0.5);
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.15);
    border-color: #854ce6;
    transform: translateY(-2px);
  }
`;

export default function HeroSection() {
  const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf";
  const avatarUrl = process.env.PUBLIC_URL + "/images/face.jpg";

  return (
    <HeroContainer id="home">
      <ProfileImage src={avatarUrl} alt="Priyanka Kalle" />
      <Name>Priyanka Kalle</Name>
      <RoleContainer>
        I am{" "}
        <Typewriter
          words={[
            "an Embedded Software Engineer",
            "an RTOS & VxWorks 22.09 Specialist",
            "a Linux Kernel & Driver Developer",
            "an Avionics & MIL-STD-1553 Engineer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1600}
        />
      </RoleContainer>
      <LocationTag>
        📍 Hyderabad, Telangana &nbsp;•&nbsp; ✉️ kallepriya025@gmail.com &nbsp;•&nbsp; 📞 +91 7601088720
      </LocationTag>
      <Description>
        Embedded Software Engineer with 2+ years of hands-on experience building real-time mission-critical systems across ARM platforms (Xilinx Zynq-7045, ZC706, TI Sitara AM5728, NXP i.MX8MP) and STM32 MCUs. Architect of dual-channel MIL-STD-1553 avionics driver stacks and Backhaul Radio Physical Layer Control Centers on ARM/AD9361. Deep expertise in RTOS application orchestration (VxWorks 22.09 RTPs), Linux kernel customization, and low-level hardware bring-up for defense and aerospace.
      </Description>
      <ButtonGroup>
        <PrimaryBtn href={resumeUrl} target="_blank" rel="noreferrer">
          📄 Download Resume (PDF)
        </PrimaryBtn>
        <SecondaryBtn
          href="https://www.linkedin.com/in/priyanka-kalle-42735b24b/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </SecondaryBtn>
        <SecondaryBtn
          href="https://github.com/kalle-priyanka"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </SecondaryBtn>
      </ButtonGroup>
    </HeroContainer>
  );
}
