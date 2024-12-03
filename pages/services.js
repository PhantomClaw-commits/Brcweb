// pages/services.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Services.module.css';

export default function Services() {
  const [activeTab, setActiveTab] = useState('academic');
  const [isVisible, setIsVisible] = useState({});
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.servicesWrapper}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleMain}>Our</span>
            <span className={styles.titleHighlight}>Services</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Comprehensive Solutions for Academic & Technical Needs
          </p>
          
          <div className={styles.heroCards}>
            {[
              {
                title: "Academic Excellence",
                desc: "Cutting-edge solutions for your academic journey",
                number: "01"
              },
              {
                title: "Technical Innovation",
                desc: "Advanced technical implementations",
                number: "02"
              },
              {
                title: "24/7 Support",
                desc: "Round-the-clock assistance for your needs",
                number: "03"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className={styles.heroCard}
                id={`section-card-${index}`}
              >
                <span className={styles.cardNumber}>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.heroCta}>
            <button 
              className={styles.primaryBtn}
              onClick={() => router.push('/contact')}
            >
              Start Your Project
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => {
                document.getElementById('services-main').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services-main" className={styles.mainSection}>
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tab} ${activeTab === 'academic' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            Academic Projects
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'ml' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('ml')}
          >
            ML/DL Solutions
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'automation' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('automation')}
          >
            Automation
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'research' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('research')}
          >
            Research Papers
          </button>
        </div>

        <div className={styles.contentArea}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.contentTitle}>
              {activeTab === 'academic' && 'Academic Project Solutions'}
              {activeTab === 'ml' && 'ML/DL Solutions'}
              {activeTab === 'automation' && 'Automation Solutions'}
              {activeTab === 'research' && 'Research Papers'}
            </h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3>
                  {activeTab === 'academic' && 'Final Year Projects'}
                  {activeTab === 'ml' && 'AI Development'}
                  {activeTab === 'automation' && 'Process Automation'}
                  {activeTab === 'research' && 'Research Support'}
                </h3>
                <ul className={styles.featureList}>
                  {activeTab === 'academic' && [
                    'Custom project development',
                    'Technical documentation',
                    'Implementation support',
                    'Project defense preparation'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {item}
                    </li>
                  ))}
                  {activeTab === 'ml' && [
                    'Custom ML model development',
                    'Neural network architecture',
                    'Model optimization',
                    'AI integration services'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {item}
                    </li>
                  ))}
                  {/* Add similar blocks for other tabs */}
                </ul>
              </div>
              <div className={styles.featureCard}>
                <h3>
                  {activeTab === 'academic' && 'Project Domains'}
                  {activeTab === 'ml' && 'Application Areas'}
                  {activeTab === 'automation' && 'Technologies'}
                  {activeTab === 'research' && 'Publication Areas'}
                </h3>
                <ul className={styles.featureList}>
                  {activeTab === 'academic' && [
                    'Web Development',
                    'Mobile Applications',
                    'Machine Learning',
                    'IoT Solutions'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {item}
                    </li>
                  ))}
                  {/* Add similar blocks for other tabs */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* Process Section */}
    <section className={styles.processSection}>
    <h2 className={styles.sectionTitle}>Our Process</h2>
    <div className={styles.processGrid}>
        {[
        {
            title: "Requirement Analysis",
            desc: "Understanding project needs and objectives through detailed client consultation and research",
            number: "1"
        },
        {
            title: "Planning & Design",
            desc: "Creating comprehensive project blueprints and architectural designs based on requirements",
            number: "2"
        },
        {
            title: "Development",
            desc: "Implementing solutions using cutting-edge technologies and best practices",
            number: "3"
        },
        {
            title: "Testing & Deployment",
            desc: "Rigorous quality assurance and smooth deployment to production environment",
            number: "4"
        }
        ].map((step, index) => (
        <div
            key={index}
            className={styles.processCardWrapper}
            id={`section-process-${index}`}
        >
            <div className={styles.processCard}>
            <div className={styles.processCardFront}>
                <div className={styles.processNumber}>{step.number}</div>
                <h3>{step.title}</h3>
            </div>
            <div className={styles.processCardBack}>
                <p>{step.desc}</p>
            </div>
            </div>
        </div>
        ))}
    </div>
    </section>

      {/* Technologies Section */}
      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle}>Technologies We Work With</h2>
        <div className={styles.techGrid}>
          {[
            "React", "Python", "TensorFlow", "Node.js",
            "AWS", "Docker", "MongoDB", "Flutter"
          ].map((tech, index) => (
            <div
              key={index}
              className={styles.techCard}
              id={`section-tech-${index}`}
            >
              <h3>{tech}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>Pricing Plans</h2>
        <div className={styles.pricingGrid}>
          {[
            {
              title: "Basic",
              price: "$499",
              features: [
                "Basic Project Implementation",
                "Standard Documentation",
                "Email Support",
                "1 Month Support"
              ]
            },
            {
              title: "Professional",
              price: "$999",
              features: [
                "Advanced Implementation",
                "Detailed Documentation",
                "Priority Support",
                "3 Months Support"
              ],
              featured: true
            },
            {
              title: "Enterprise",
              price: "Custom",
              features: [
                "Custom Implementation",
                "Complete Documentation",
                "24/7 Support",
                "6 Months Support"
              ]
            }
          ].map((plan, index) => (
            <div
              key={index}
              className={`${styles.priceCard} ${plan.featured ? styles.featured : ''}`}
              id={`section-price-${index}`}
            >
              <h3>{plan.title}</h3>
              <div className={styles.price}>{plan.price}</div>
              <ul className={styles.priceFeatures}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={styles.priceButton}
                onClick={() => router.push('/contact')}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Get in touch with us today and let's bring your ideas to life</p>
          <button 
            className={styles.ctaButton}
            onClick={() => router.push('/contact')}
          >
            Contact Us Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}