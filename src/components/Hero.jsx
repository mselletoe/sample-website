import './Hero.scss';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          Your trusted care<br />now and always
        </h1>
        <p>
          For the best results, align your health needs with your medication plan.
        </p>
        <button className="button">Shop now</button>
      </div>
      <div className="hero-image">
        <img src="http://localhost:3845/assets/48535412c3d7b624d3deb5fa8d9a980648f70d7b.png" alt="Hero" />
      </div>
    </section>
  );
}
