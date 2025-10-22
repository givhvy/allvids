import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          <span className="title-white">Prompt </span>
          <span className="title-lime">Library</span>
        </h1>
        <p className="hero-description">
          Curated prompts from our video tutorials to help you build amazing apps
        </p>
      </div>
    </section>
  );
}

