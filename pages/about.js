import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="text-center mb-4">About Us</h1>
        <p>
          BRC Web is a trusted name in providing academic solutions, automation services, and 
          tutoring for emerging technologies. With 80+ projects under our belt, we’re driven by 
          passion and innovation.
        </p>
      </div>
      <Footer />
    </>
  );
}
