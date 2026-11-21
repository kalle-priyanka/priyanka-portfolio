import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 3rem 1.5rem 5rem 1.5rem;
  max-width: 1200px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.75rem;
`;

const ProjectCard = styled.div`
  background: rgba(23, 23, 33, 0.85);
  border: 1px solid rgba(133, 76, 230, 0.25);
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #854ce6;
    box-shadow: 0 8px 30px rgba(133, 76, 230, 0.35);
  }
`;

const ClientBadge = styled.span`
  background: linear-gradient(135deg, rgba(133, 76, 230, 0.2), rgba(237, 7, 107, 0.2));
  color: #ed076b;
  border: 1px solid rgba(237, 7, 107, 0.4);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.75rem;
  align-self: flex-start;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

const ProjectDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background: rgba(133, 76, 230, 0.12);
  color: #854ce6;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  border: 1px solid rgba(133, 76, 230, 0.25);
`;

const projectsData = [
  {
    title: "Dual-Channel MIL-STD-1553 Avionics Subsystem (Arm_Board / ESU)",
    client: "DRDO (Defence Research & Development Organisation)",
    description:
      "Architected and implemented the complete dual-channel MIL-STD-1553 driver stack (libbu69095.so) in C on custom Xilinx Zynq-7045 ARM Linux. Fully supported Bus Controller (BC), Remote Terminal (RT), and Message Monitor (MT) modes over SPI (/dev/spidev1.0 & /dev/spidev2.0) with robust shared memory queue arbitration (/bu69092_bc_queue) and live JSON telemetry streaming for the ESU dashboard.",
    tech: ["C", "MIL-STD-1553B", "Linux Device Drivers", "Zynq-7045", "SPI", "Shared Memory", "devmem"],
  },
  {
    title: "Backhaul Radio Physical Layer Control Center & Web NMS (PHY_APP)",
    client: "Larsen & Toubro (L&T)",
    description:
      "Engineered an end-to-end Python/Flask HTTPS Network Management System (NMS) on ARM Linux interfacing with the AD9361 RF Agile Transceiver via Linux IIO. Implemented closed-loop Automatic Power Control (APC) and Automatic Frequency Control (AFC) state machines, 6-band AFE filter switching via direct AXI devmem2 register manipulation, and OpenSSL 256-bit ChaCha20 stream cipher encryption.",
    tech: ["Python", "Flask", "AD9361 RF", "Linux IIO", "AXI Registers", "devmem2", "ChaCha20", "GPS"],
  },
  {
    title: "Mission-Critical Real-Time Test Orchestrator & Supervisor",
    client: "Hindustan Aeronautics (HAL)",
    description:
      "Designed and implemented an automated real-time test orchestration system for embedded VxWorks 22.09 applications in C on custom NXP i.MX8MP hardware. Developed RTP-based validation utilities for Ethernet (raw ICMP ping) and USB I/O, plus a centralized supervisor RTP tracking 2D/3D graphics subsystem lifecycles via rtpSpawn()/rtpKill() with flash logging.",
    tech: ["VxWorks 22.09", "RTOS", "C", "RTP Processes", "NXP i.MX8MP", "ICMP Ping", "USB I/O"],
  },
  {
    title: "Tactical VoIP HMI & Audio Codec Bring-Up (AM5728)",
    client: "Tactical Communication Systems",
    description:
      "Cross-compiled Linphone SDK for ARMv7 on TI Linux 4.19 and engineered a production Qt/C++ VoIP HMI reducing call setup latency by 18%. Backported CS47L35 ALSA audio codec drivers with Noise Gate & DRC DSP filters, integrated TVP7002 video decoder over I2C/V4L2, and resolved Push-to-Talk (PTT) race conditions.",
    tech: ["Qt/C++", "Linphone SDK", "ALSA / ASoC", "V4L2", "GStreamer", "TI AM5728", "STM32"],
  },
  {
    title: "Smart Transfer Port Controller (STP Controller)",
    client: "Schematic Engineering Industries",
    description:
      "Built a secure smart controller on Raspberry Pi 3 (Python/Flask/SQLite) for automated powder transfer with QR-based multi-tier access, electromechanical GPIO lock control, buzzer/LED alerts, event logging, and PDF report generation for pharmaceutical/nuclear safety workflows.",
    tech: ["Python", "Flask", "SQLite", "Raspberry Pi", "GPIO Lock Control", "QR Code APIs"],
  },
  {
    title: "Wire-Speed Inline Packet Filtering via XDP / eBPF",
    client: "Kernel Networking Engine",
    description:
      "Implemented a high-throughput inline packet filtering engine on a Linux bridge using TAP interfaces, executing wire-speed IP packet filtering via dynamically updated BPF maps for real-time security inspection.",
    tech: ["eBPF", "XDP", "Linux Bridge", "C", "TAP Interfaces", "BPF Maps"],
  },
];

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <SectionSubtitle>
        Mission-critical defense, avionics, tactical communications, and embedded software solutions
      </SectionSubtitle>
      <ProjectsGrid>
        {projectsData.map((proj, index) => (
          <ProjectCard key={index}>
            <div>
              <ClientBadge>{proj.client}</ClientBadge>
              <ProjectTitle>{proj.title}</ProjectTitle>
              <ProjectDescription>{proj.description}</ProjectDescription>
            </div>
            <div>
              <TechStackContainer>
                {proj.tech.map((t, idx) => (
                  <TechBadge key={idx}>{t}</TechBadge>
                ))}
              </TechStackContainer>
            </div>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}
