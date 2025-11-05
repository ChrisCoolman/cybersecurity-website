import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ciaImage from './assets/cia.png';
import biometricsImg from './assets/biometrics.jpg';
import mfaImg from './assets/mfa.png';
import passwordImg from './assets/password.webp';
import smartCardImg from './assets/smartCard.jpg';

// Helper component for scroll-in animations
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className={`animated-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </section>
  );
};

// NEW: Reusable Interactive Accordion Card component
const InteractiveCard = ({ title, icon, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);
  
  return (
    <div className="interactive-card" data-is-open={isOpen}>
      <div className="interactive-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>
          {icon && <span className="card-icon">{icon}</span>}
          {title}
        </h3>
        <div className="plus-minus-toggle"></div>
      </div>
      <div className="interactive-content">
        <div className="interactive-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

const authMethods = [
  // ... (same as before)
  {
    title: 'Biometrics',
    image: biometricsImg,
    alt: 'Biometrics Example',
    description: 'Verifying who you are with "something you are," like your face or fingerprint.',
  },
  {
    title: 'Multi-Factor Authentication',
    image: mfaImg,
    alt: 'Multi-Factor Authentication Example',
    description: 'Combining multiple methods like a password or token for extra security.',
  },
  {
    title: 'Password',
    image: passwordImg,
    alt: 'Using a password',
    description: 'A password is "something you know." Only one person knows the password which keeps it secure.',
  },
  {
    title: 'Smart Card',
    image: smartCardImg,
    alt: 'Scanning a card',
    description: 'Using "something you have," like a physical keycard, to gain access.',
  },
];

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const heroTitle = "Thanksgiving Cybersecurity";

  return (
    <div className="App">
      <header
        className="hero"
        style={{
          '--mouse-x': mousePos.x,
          '--mouse-y': mousePos.y,
        }}
      >
        <div className="hero-background-layer"></div>
        <div className="hero-content">
          <h1>
            {heroTitle.split('').map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 50}ms` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="subtitle">
            While you're protecting the turkey from being overcooked, don't forget to protect your data from being stolen.
          </p>
        </div>
      </header>

      <main className="container">
        <AnimatedSection>
          <InteractiveCard title="A Holiday Cybersecurity Intro" icon="🦃" startOpen={true}>
            <p>
              As we gather this holiday season, our digital lives are as much a part of the celebration as the feast itself. Click through these topics to learn key concepts that will keep your online presence safe and sound.
            </p>
          </InteractiveCard>
        </AnimatedSection>
        
        <AnimatedSection>
            <InteractiveCard title="The CIA Triad" icon="🔒">
              <img src={ciaImage} alt="CIA Triad Diagram" className="card-header-image" />
              <p>The three core principles of information security.</p>
              <ul>
                <li><strong>Confidentiality:</strong> Data is kept secret and only those who are allowed to can see it. This is like keeping your secret family recipes safe from prying eyes.</li>
                <li><strong>Integrity:</strong> Making sure data is not modified or corrupted. Just as you wouldn't want your Thanksgiving recipes altered, data must remain uncorrupted and trustworthy.</li>
                <li><strong>Availability:</strong> Ensuring data is always available for allowed users. Just as you want your Thanksgiving dinner to be ready on time, systems must be reliable and available for users.</li>
              </ul>
            </InteractiveCard>
        </AnimatedSection>

        <AnimatedSection>
            <InteractiveCard title="The 3 States of Data" icon="💾">
               <p>Data needs protection no matter where it is.</p>
               <ul>
                <li><strong>Rest:</strong> Data at rest is when data is inside of a database or server doing nothing. Just like leftovers stored in the fridge, this data needs to be protected from unauthorized access.</li>
          <li><strong>Transit:</strong> Data in transit is being passed to another database or server. Similar to passing dishes around the table, this data must be secured to prevent interception by unauthorized parties.</li>
          <li><strong>Use:</strong> Data is in use when it is being processed instead of sitting in a database or server. Just as you handle food carefully while cooking, this data must be protected during processing to prevent leaks or corruption.</li>
              </ul>
            </InteractiveCard>
        </AnimatedSection>

        <AnimatedSection>
          <div className="content-card full-width">
            <h2>Types of Authentication</h2>
            <p>Authentication is how you prove you are who you say you are, using one of three factors:</p>
            <ul className="auth-factors">
                <li>Something you <strong>KNOW</strong></li>
                <li>Something you <strong>HAVE</strong></li>
                <li>Something you <strong>ARE</strong></li>
            </ul>

            <div className="auCards">
              {authMethods.map((method) => (
                <div className="auCard" key={method.title}>
                  <div className="card-image-container">
                     <img src={method.image} alt={method.alt} />
                  </div>
                  <div className="card-content">
                    <h4>{method.title}</h4>
                    <p>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
            <InteractiveCard title="Better Passwords" icon="🔑">
                <p>A weak password is like an unlocked door. Strengthen your security with these tips:</p>
                <ul>
                    <li>Use a long mix of letters, numbers, & symbols.</li>
                    <li>Avoid personal info (birthdays, names).</li>
                    <li>Create a passPHRASE: `shaneIsVeryShort`</li>
                    <li>Use a password manager to remember multiple different passwords.</li>
                </ul>
            </InteractiveCard>
        </AnimatedSection>
            
        <AnimatedSection>
            <InteractiveCard title="Spotting Phishing Scams" icon="🎣">
                <p>Phishing is when attackers use fake emails or sites to trick you. Don't take the bait!</p>
                <ul>
                    <li>Check who the message is sent by, only amazon can send a message from amazon.com, so don't trust amazun.com</li>
          <li>Check where links lead to, if you get an email from amazon that doesn't go to amazon.com, it's fake</li>
          <li>Be cautious if a website is the real one when putting in a password</li>
                </ul>
            </InteractiveCard>
        </AnimatedSection>
      </main>

      <footer className="footer">
        <p>Info by Me from Cyber.org</p>
      <p>Design and Thanksgiving jokes by Github Copilot</p>
      <p>Image Sources:</p>
      <div className="imgSources">
        <a href="https://www.the-parallax.com/thanksgiving-cybersecurity-trends/" target="_blank">Thanksgiving Cybersecurity</a>
        <a href="https://www.kaspersky.com/resource-center/definitions/biometrics" target="_blank">Biometrics Image</a>
        <a href="https://docs.google.com/presentation/d/1GLppV2rufPo7kBWb9er7v73fQhBIHxMs/edit?pli=1" target="_blank">CIA Triad Image</a>
        <a href="https://www.xcitium.com/knowledge-base/mfa/" target="_blank">MFA Image</a>
        <a href="https://www.securitymagazine.com/articles/89919-the-25-passwords-leaked-online-in-2018" target="_blank">Password Image</a>
        <a href="https://www.usatoday.com/story/money/business/2015/10/01/chip-credit-debit-card-readers-october-1/73140516/" target="_blank">Smart Card Image</a>
      </div>
      </footer>
    </div>
  );
}

export default App;