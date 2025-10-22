import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <a href="/" className="logo">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2L20.5 12L28 6L24 15H32L25 22L30 32L20 26L18 36L16 26L6 32L11 22L4 15H12L8 6L15.5 12L18 2Z" fill="#CDFC39"/>
            </svg>
            <span>BuildLoop</span>
          </a>
          <a href="/" className="home-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Home</span>
          </a>
        </div>
      </div>
    </header>
  );
}

