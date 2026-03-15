/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { ParticleBackground } from './components/ParticleBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SkillsEducation } from './components/SkillsEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <SmoothScroll>
      <div className="min-h-screen text-slate-900 dark:text-slate-50 font-sans selection:bg-teal-500/30 transition-colors duration-300">
        <CustomCursor />
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <ParticleBackground />
            <Navigation />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <SkillsEducation />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </SmoothScroll>
  );
}
