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
    description: 'Combining multiple methods (e.g., password + phone code) for extra security.',
  },
  {
    title: 'Password',
    image: passwordImg,
    alt: 'Using a password',
    description: 'The classic "something you know." A strong, unique password is your first line of defense.',
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
                <li><strong>Confidentiality:</strong> Keeping secrets. Think of it as guarding your secret family recipes.</li>
                <li><strong>Integrity:</strong> Ensuring data is accurate and trustworthy, not a "turkey" of a file.</li>
                <li><strong>Availability:</strong> Making sure you can access your data when you need it, just like the gravy on Thanksgiving day.</li>
              </ul>
            </InteractiveCard>
        </AnimatedSection>

        <AnimatedSection>
            <InteractiveCard title="The 3 States of Data" icon="💾">
               <p>Data needs protection no matter where it is.</p>
               <ul>
                <li><strong>At Rest:</strong> Data stored on a device, like leftovers in the fridge. It needs to be locked up tight.</li>
                <li><strong>In Transit:</strong> Data moving across a network. It's like passing dishes at the table—you don't want anyone to intercept them.</li>
                <li><strong>In Use:</strong> Data being actively processed by an application. This requires careful handling, just like carving the turkey.</li>
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
                    <li>Create a passPHRASE: `Correct!Horse-Battery-Staple?`</li>
                    <li>Use a password manager to keep track.</li>
                </ul>
            </InteractiveCard>
        </AnimatedSection>
            
        <AnimatedSection>
            <InteractiveCard title="Spotting Phishing Scams" icon="🎣">
                <p>Phishing is when attackers use fake emails or sites to trick you. Don't take the bait!</p>
                <ul>
                    <li>Check the sender's email address. Is it legit?</li>
                    <li>Hover over links before clicking. Does the URL match?</li>
                    <li>Beware of urgent threats or "too good to be true" offers.</li>
                </ul>
            </InteractiveCard>
        </AnimatedSection>
      </main>

      <footer className="footer">
        <p>Info by Me</p>
      <p>Design and thanksgiving jokes by github copilot</p>
      <p>Image Sources</p>
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