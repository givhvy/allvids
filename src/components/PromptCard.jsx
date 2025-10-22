import { motion } from 'framer-motion';
import './PromptCard.css';

export default function PromptCard({ prompt, index }) {
  return (
    <motion.a 
      href={prompt.link} 
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-image-wrapper">
        <img src={prompt.thumbnail} alt={prompt.title} className="card-image" loading="lazy" />
        <div className="play-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </div>
        <div className={`card-badge badge-${prompt.category}`}>
          {prompt.categoryLabel}
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{prompt.title}</h3>
        <p className="card-description">{prompt.description}</p>
        <div className="card-footer">
          <span className="prompts-count">{prompt.promptsCount} prompts</span>
          <span className="view-all-btn">
            View All →
          </span>
        </div>
      </div>
    </a>
  );
}

