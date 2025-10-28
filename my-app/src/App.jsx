import React from 'react'
import './App.css'

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
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmf7cWLkoPSDcF3_ymjBWuJxD2FtG020ilqQ&s" alt="Cybersecurity Thanksgiving Picture" />
    </div>
    <div className="CIA">
      <h2>The CIA Triad</h2>
      <img src="my-app/src/assets/cia-img.png" alt="CIA Triad Diagram" />
      <p>
        The CIA Triad is a fundamental concept in cybersecurity, representing three core principles: Confidentiality, Integrity, and Availability.
      </p>
      <ul>
        <li><strong>Confidentiality:</strong> Data is kept secret and only those who are allowed to can see it. This is like keeping your secret family recipes safe from prying eyes.</li>
        <li><strong>Integrity:</strong> Making sure data is not modified or corrupted. Just as you wouldn't want your Thanksgiving recipes altered, data must remain uncorrupted and trustworthy.</li>
        <li><strong>Availability:</strong> Ensuring data is always available for allowed users. Just as you want your Thanksgiving dinner to be ready on time, systems must be reliable and available for users.</li>
      </ul>
    </div>
    </>
  )
}

export default App
