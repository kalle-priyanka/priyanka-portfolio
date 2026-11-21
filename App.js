import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/themes";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
  overflow-x: hidden;
`;

const GlowBackground = styled.div`
  position: absolute;
  top: -100px;
  left: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(133, 76, 230, 0.25), transparent 60%);
  filter: blur(80px);
  z-index: 0;
`;

const GlowBackgroundSecondary = styled.div`
  position: absolute;
  top: 40%;
  right: -150px;
  width: 650px;
  height: 650px;
  background: radial-gradient(circle, rgba(237, 7, 107, 0.18), transparent 65%);
  filter: blur(90px);
  z-index: 0;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <GlowBackground />
        <GlowBackgroundSecondary />
        <Header />
        <HeroSection />
        <Skills />
        <Projects />
        <Footer />
      </Body>
    </ThemeProvider>
  );
}

export default App;
