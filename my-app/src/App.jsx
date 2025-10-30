import React from 'react'
import './App.css'
import ciaImage from './assets/cia.png'
import biometricsImg from './assets/biometrics.jpg'
import mfaImg from './assets/mfa.png'
import passwordImg from './assets/password.webp'
import smartCardImg from './assets/smartCard.jpg'

function App() {
  return (
    <>
      <div className="titleDiv">
        <h1>Thanksgiving Cybersecurity</h1>
      </div>

      <div className="info">
        <p>
          As we gather around the table this Thanksgiving, let's remember to protect our digital feast.
          Cybersecurity is as essential as the turkey on our plates.
          To better understand the importance of cybersecurity during the holiday season, consider the following information to keep your online presence safe:
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmf7cWLkoPSDcF3_ymjBWuJxD2FtG020ilqQ&s"
          alt="Cybersecurity Thanksgiving"
        />
      </div>

      <h2>The CIA Triad</h2>
      <div className="CIA">
        <img src={ciaImage} alt="CIA Triad Diagram" />
        <p>
          The CIA Triad is a fundamental concept in cybersecurity, representing three core principles: Confidentiality, Integrity, and Availability.
        </p>
        <ul>
          <li><strong>Confidentiality:</strong> Data is kept secret and only those who are allowed to can see it. This is like keeping your secret family recipes safe from prying eyes.</li>
          <li><strong>Integrity:</strong> Making sure data is not modified or corrupted. Just as you wouldn't want your Thanksgiving recipes altered, data must remain uncorrupted and trustworthy.</li>
          <li><strong>Availability:</strong> Ensuring data is always available for allowed users. Just as you want your Thanksgiving dinner to be ready on time, systems must be reliable and available for users.</li>
        </ul>
      </div>

      <h2>3 States of Data</h2>
      <div className="data">
        <p>Data can be in 3 different states.</p>
        <ul>
          <li><strong>Rest:</strong> Data at rest is when data is inside of a database or server doing nothing. Just like leftovers stored in the fridge, this data needs to be protected from unauthorized access.</li>
          <li><strong>Transit:</strong> Data in transit is being passed to another database or server. Similar to passing dishes around the table, this data must be secured to prevent interception by unauthorized parties.</li>
          <li><strong>Use:</strong> Data is in use when it is being processed instead of sitting in a database or server. Just as you handle food carefully while cooking, this data must be protected during processing to prevent leaks or corruption.</li>
        </ul>
      </div>

      <h2>Different Types of Authentication</h2>
      <div className="authentication">
        <h3>Authentication is a way of verifying who you are using 3 different methods:</h3>
        <ul>
          <li><strong>Something you know:</strong> This could be a password or PIN. Just like remembering your secret family recipe, this method relies on knowledge only you possess.</li>
          <li><strong>Something you have:</strong> This could be a physical device like a smartphone or security token. Similar to having a special key to your home, this method requires possession of a specific item.</li>
          <li><strong>Something you are:</strong> This involves biometric data like fingerprints or facial recognition. Just as your unique features identify you, this method uses inherent physical characteristics for verification.</li>
        </ul>

        <h3 style={{ textAlign: "center" }}>There are many different types of authentication that use these different methods</h3>

        <div className="auCards">
          <div className="auCard">
            <h4>Biometrics</h4>
            <img src={biometricsImg} alt="Biometrics Example" />
            <p>An example of face ID being used to verify identity.</p>
          </div>

          <div className="auCard">
            <h4>Multi-Factor Authentication</h4>
            <img src={mfaImg} alt="Multi-Factor Authentication Example" />
            <p>Using multiple methods (in this case password and token) to verify identity.</p>
          </div>

          <div className="auCard">
            <h4>Password</h4>
            <img src={passwordImg} alt="Using a password" />
            <p>Typing in a password to verify identity.</p>
          </div>

          <div className="auCard">
            <h4>Smart Card</h4>
            <img src={smartCardImg} alt="Scanning a card" />
            <p>Scanning a special card to verify identity.</p>
          </div>
        </div>
      </div>
      <h2>Passwords</h2>
      <div className="passwords">
        <p>
          Passwords are a very common method of authentication, but they can be vulnerable if not used correctly. Here are some tips for creating strong passwords:
        </p>
        <ul>
          <li>Use a mix of letters, numbers, and special characters.</li>
          <li>Avoid using easily guessable information like birthdays or common words.</li>
          <li>Use a passPHRASE instead of a passWORD, which is a sequence of words that is easy for you to remember but hard for others to guess.</li>
          <li>Regularly update your passwords and avoid reusing them across multiple accounts.</li>
        </ul>
      </div>
      <h2>Phishing</h2>
      <div className="phishing">
        <p>Phishing is a common method of stealing information, in which attackers will pretend to be someone they are not to steal information. Here are some tips for spotting phising scams!</p>
        <ul>
          <li>Check who the message is sent by, only amazon can send a message from amazon.com, so don't trust amazun.com</li>
          <li>Check where links lead to, if you get an email from amazon that doesn't go to amazon.com, it's fake</li>
          <li>Be cautious if a website is the real one when putting in a password</li>
        </ul>
      </div>
    </>
  )
}

export default App;
