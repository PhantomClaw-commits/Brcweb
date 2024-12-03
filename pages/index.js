// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`${styles.heroContent} ${styles.fadeIn}`}>
            <h1 className={styles.title}>Transform Your Ideas Into Reality</h1>
            <p className={styles.subtitle}>Innovative Solutions for Modern Challenges</p>
            <div className={styles.ctaGroup}>
              <a href="/services" className={`${styles.ctaButton} ${styles.primary}`}>
                Explore Services
              </a>
              <a href="/contact" className={`${styles.ctaButton} ${styles.secondary}`}>
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} ${styles.slideIn}`}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Academic Projects</h3>
              <p>Cutting-edge solutions for your academic needs</p>
              <span className={styles.counter}>200+</span>
              <span className={styles.label}>Projects Completed</span>
            </div>

            <div className={`${styles.featureCard} ${styles.slideIn}`}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-brain"></i>
              </div>
              <h3>ML/DL Solutions</h3>
              <p>Advanced AI implementations for modern problems</p>
              <span className={styles.counter}>50+</span>
              <span className={styles.label}>AI Models</span>
            </div>

            <div className={`${styles.featureCard} ${styles.slideIn}`}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Automation</h3>
              <p>Streamline your workflow with smart automation</p>
              <span className={styles.counter}>100+</span>
              <span className={styles.label}>Automation Solutions</span>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <div className={styles.testimonialGrid}>
            {[1, 2, 3].map((_, index) => (
              <div key={index} className={`${styles.testimonialCard} ${styles.fadeInUp}`}>
                <div className={styles.quote}>"</div>
                <p>Exceptional service and outstanding results. The team went above and beyond our expectations.</p>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <h4>Client Name</h4>
                    <span>Position, Company</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.stats}>
          <div className={styles.statGrid}>
            <div className={`${styles.statCard} ${styles.scaleIn}`}>
              <h3>200+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={`${styles.statCard} ${styles.scaleIn}`}>
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={`${styles.statCard} ${styles.scaleIn}`}>
              <h3>50+</h3>
              <p>Expert Team Members</p>
            </div>
            <div className={`${styles.statCard} ${styles.scaleIn}`}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}