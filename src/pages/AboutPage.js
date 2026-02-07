
import React from 'react';
import './AboutPage.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <h1>Welcome to the About Section</h1>
        <p>Your journey to a greener future starts here.</p>
        <button className="cta-button">Join Us in Sustainability</button>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to raise awareness about the impact of carbon emissions and to empower individuals to make sustainable choices. Through this project, we aim to educate the community and foster a culture of environmental responsibility. By using our calculator, you can easily track and reduce your carbon footprint to help combat climate change.</p>
      </section>

      <section className="interactive-timeline">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Phase 1: Conceptualization</h3>
            <p>We began by researching the most effective ways to calculate and reduce carbon emissions through personal habits.</p>
          </div>
          <div className="timeline-item">
            <h3>Phase 2: Development</h3>
            <p>Our team developed a user-friendly calculator, integrating various categories like transportation, energy, food, and waste.</p>
          </div>
          <div className="timeline-item">
            <h3>Phase 3: Launch</h3>
            <p>We launched the website to showcase the power of individual action in reducing environmental impact.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <h3>Personalized Results</h3>
            <p>Our calculator provides accurate insights based on your daily activities, from transportation to water usage.</p>
          </li>
          <li>
            <h3>Interactive & Engaging</h3>
            <p>Track your carbon footprint with real-time data visualization through interactive graphs.</p>
          </li>
          <li>
            <h3>Suggestions for Action</h3>
            <p>Get personalized suggestions on how to reduce your carbon emissions and live more sustainably.</p>
          </li>
          <li>
            <h3>Academic Expertise</h3>
            <p>This project is developed by a team of students specializing in AI and environmental science, bringing both technical and academic expertise to the table.</p>
          </li>
        </ul>
      </section>

      <section className="academic-testimonials">
        <h2>Academic Testimonials</h2>
        <p>"This project has been an eye-opener for me, showing how we can all contribute to reducing our carbon footprint, even through small daily changes. The interactive features of this website made it easy to understand and take action." - Professor, Environmental Science Department</p>
        <p>"A fantastic initiative that integrates technology with sustainability. The real-time graphs and suggestions are especially impressive."</p>
      </section>

      <section className="call-to-action">
        <h2>Take Action Today</h2>
        <p>Join us on this journey towards a more sustainable world. Start calculating your carbon footprint and find ways to reduce it.</p>
        <button className="cta-button">Start Now</button>
      </section>
    </div>
  );
};

export default AboutUs;
