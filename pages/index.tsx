import React from 'react';
import Head from 'next/head';

const Index = () => (
  <div className="container">
    <Head>
      <title>B Fit Buddy | Online Coaching</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>

    <header className="header">
      <div className="header-content">
        <h1 className="logo">B Fit Buddy</h1>
        <div className="contact-info">
          <a href="mailto:bfitbuddy.in@gmail.com">bfitbuddy.in@gmail.com</a>
          <span> | </span>
          <a href="tel:8281635140">+91 8281 635 140</a>
        </div>
      </div>
    </header>

    <section className="hero">
      <div className="hero-content">
        <h2>Unleash Your Potential</h2>
        <p>Expert Online Coaching for a Stronger You</p>
        <button className="cta-button">Start Your Journey</button>
      </div>
    </section>

    <section className="quote-section">
      <blockquote>
        "The only bad workout is the one that didn't happen."
      </blockquote>
    </section>

    <section className="programs">
      <div className="programs-content">
        <h3>Our Expert Programs</h3>
        <div className="program-grid">
          <div className="program-card">
            <div className="program-image" style={{ backgroundImage: 'url(/product-1.jpg)' }}></div>
            <div className="program-info">
              <h4>Monthly Coaching</h4>
              <p>Transform your fitness journey with personalized monthly coaching designed to deliver measurable results. Our expert coaches provide comprehensive guidance tailored to your goals, whether you're building strength, improving endurance, or achieving a complete body transformation.</p>
            </div>
          </div>
          <div className="program-card">
            <div className="program-image" style={{ backgroundImage: 'url(/product-2.jpg)' }}></div>
            <div className="program-info">
              <h4>Beginner Fat Loss</h4>
              <p>Transform your body in just 8 weeks with our scientifically-designed Beginner Fat Loss program. This entry-level course combines progressive workouts with nutrition guidance, perfect for those starting their fitness journey. You'll learn sustainable habits that accelerate fat loss.</p>
            </div>
          </div>
          <div className="program-card">
            <div className="program-image" style={{ backgroundImage: 'url(/product-3.jpg)' }}></div>
            <div className="program-info">
              <h4>1-on-1 Coaching</h4>
              <p>Transform your fitness journey with personalized 1-on-1 coaching tailored to your unique goals and lifestyle. Our expert trainers deliver customized workout and nutrition plans through live video sessions, ensuring real-time feedback and accountability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="why-us">
      <div className="why-us-content">
        <h3>Why Choose B Fit Buddy?</h3>
        <div className="features">
          <div className="feature-card">
            <h4>Customized Plans</h4>
            <p>Tailored workout and nutrition strategies designed specifically for your body and goals.</p>
          </div>
          <div className="feature-card">
            <h4>24/7 Support</h4>
            <p>Constant guidance and motivation to keep you on track, anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <h4>Proven Results</h4>
            <p>Join a community of success stories. Transform your lifestyle with science-backed methods.</p>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} B Fit Buddy. All rights reserved.</p>
      <p>Transforming Lives, One Rep at a Time.</p>
    </footer>

    <style jsx global>{`
      :root {
        --color-black: #1A1A1A;
        --color-beige: #E6DCC3;
        --color-beige-dark: #D4C5A5;
        --font-main: 'Outfit', sans-serif;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background-color: var(--color-black);
        color: var(--color-beige);
        font-family: var(--font-main);
        line-height: 1.6;
      }

      a {
        color: var(--color-beige);
        text-decoration: none;
        transition: color 0.3s ease;
      }

      a:hover {
        color: #fff;
      }

      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .header {
        padding: 2rem;
        background-color: rgba(26, 26, 26, 0.95);
        position: sticky;
        top: 0;
        z-index: 100;
        border-bottom: 1px solid rgba(230, 220, 195, 0.1);
      }

      .header-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .logo {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .contact-info {
        font-size: 0.9rem;
        opacity: 0.9;
      }

      .hero {
        height: 80vh;
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/hero.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
      }

      .hero-content {
        max-width: 800px;
        padding: 2rem;
        animation: fadeIn 1.5s ease-out;
      }

      .hero h2 {
        font-size: 4rem;
        margin-bottom: 1rem;
        line-height: 1.1;
      }

      .hero p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        font-weight: 300;
      }

      .cta-button {
        background-color: var(--color-beige);
        color: var(--color-black);
        padding: 1rem 3rem;
        border: none;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        border-radius: 2px;
      }

      .cta-button:hover {
        background-color: #fff;
        transform: translateY(-2px);
      }

      .quote-section {
        padding: 6rem 2rem;
        text-align: center;
        background-color: #222;
      }

      blockquote {
        font-size: 2rem;
        font-style: italic;
        font-weight: 300;
        max-width: 800px;
        margin: 0 auto;
      }

      .programs {
        padding: 6rem 2rem;
        background-color: #1a1a1a;
      }

      .programs-content {
        max-width: 1200px;
        margin: 0 auto;
      }

      .programs h3 {
        font-size: 2.5rem;
        margin-bottom: 4rem;
        text-align: center;
        position: relative;
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
      }

      .programs h3::after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background-color: var(--color-beige);
        margin: 1rem auto 0;
      }

      .program-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 3rem;
      }

      .program-card {
        background-color: #222;
        border: 1px solid rgba(230, 220, 195, 0.1);
        transition: transform 0.3s ease;
        overflow: hidden;
      }

      .program-card:hover {
        transform: translateY(-10px);
        border-color: var(--color-beige);
      }

      .program-image {
        height: 250px;
        background-size: cover;
        background-position: center;
      }

      .program-info {
        padding: 2rem;
      }

      .program-info h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--color-beige);
      }

      .program-info p {
        color: rgba(230, 220, 195, 0.7);
        font-size: 0.95rem;
        line-height: 1.6;
      }

      .why-us {
        padding: 6rem 2rem;
        background-image: linear-gradient(rgba(26,26,26,0.95), rgba(26,26,26,0.95)), url('/why-us.png');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
      }

      .why-us-content {
        max-width: 1200px;
        margin: 0 auto;
      }

      .why-us h3 {
        font-size: 2.5rem;
        margin-bottom: 4rem;
        text-align: center;
        position: relative;
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
      }

      .why-us h3::after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background-color: var(--color-beige);
        margin: 1rem auto 0;
      }

      .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3rem;
      }

      .feature-card {
        padding: 2rem;
        border: 1px solid rgba(230, 220, 195, 0.2);
        transition: transform 0.3s ease;
        background-color: rgba(26, 26, 26, 0.5);
      }

      .feature-card:hover {
        transform: translateY(-5px);
        border-color: var(--color-beige);
      }

      .feature-card h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--color-beige);
      }

      .feature-card p {
        color: rgba(230, 220, 195, 0.8);
      }

      .footer {
        padding: 3rem 2rem;
        text-align: center;
        border-top: 1px solid rgba(230, 220, 195, 0.1);
        font-size: 0.9rem;
        opacity: 0.7;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @media (max-width: 768px) {
        .hero h2 {
          font-size: 2.5rem;
        }
        .header-content {
          flex-direction: column;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Index;
