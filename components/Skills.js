import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 3rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 2.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  background: rgba(23, 23, 33, 0.7);
  border: 1px solid rgba(133, 76, 230, 0.25);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #854ce6;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #854ce6;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: rgba(133, 76, 230, 0.12);
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(133, 76, 230, 0.35);
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const skillsData = [
  {
    category: "Avionics & RF Protocols",
    icon: "📡",
    items: [
      "MIL-STD-1553B (BC, RT, MT)",
      "DDC BU-69095",
      "AD9361 RF Agile Transceiver",
      "AFE Band Filtering (4.4-5.0 GHz)",
      "Closed-Loop APC / AFC",
    ],
  },
  {
    category: "Embedded OS & RTOS",
    icon: "⚙️",
    items: [
      "VxWorks 22.09 (RTPs)",
      "PetaLinux",
      "Yocto Project",
      "Linux BSP Bring-Up",
      "Device Tree Overlays",
      "Kernel Modules",
      "U-Boot",
    ],
  },
  {
    category: "Kernel & Driver Development",
    icon: "💻",
    items: [
      "Linux Character Drivers",
      "AXI devmem2 mmap",
      "SPI (spidev)",
      "I2C",
      "UART",
      "GPIO",
      "DMA Engine",
      "Hardware Interrupts",
    ],
  },
  {
    category: "Networking & Security",
    icon: "🔒",
    items: [
      "eBPF / XDP Filtering",
      "OpenSSL (256-bit ChaCha20)",
      "Linux Bridge & TAP",
      "SNMP / OID Parsing",
      "SIP / RTP Audio",
      "WebSockets / Socket.IO",
    ],
  },
  {
    category: "Multimedia & UI Systems",
    icon: "🎥",
    items: [
      "ALSA / ASoC Codec Stack",
      "CS47L35 Audio Codec",
      "V4L2 Video Capture",
      "Linphone SDK",
      "GStreamer Pipelines",
      "Qt / QML (Embedded HMI)",
      "OpenGL ES",
    ],
  },
  {
    category: "Hardware Platforms & Tools",
    icon: "🔌",
    items: [
      "Xilinx Zynq-7045 / ZC706",
      "NXP i.MX8MP",
      "TI Sitara AM5728",
      "STM32 (Cortex-M)",
      "Raspberry Pi",
      "GDB",
      "Wireshark",
      "Logic Analyzers",
    ],
  },
];

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionSubtitle>
        Technologies, platforms, and protocols I work with daily
      </SectionSubtitle>
      <SkillsGrid>
        {skillsData.map((group, idx) => (
          <SkillCard key={idx}>
            <CardTitle>
              <span>{group.icon}</span> {group.category}
            </CardTitle>
            <TagsContainer>
              {group.items.map((skill, sIdx) => (
                <SkillTag key={sIdx}>{skill}</SkillTag>
              ))}
            </TagsContainer>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}
