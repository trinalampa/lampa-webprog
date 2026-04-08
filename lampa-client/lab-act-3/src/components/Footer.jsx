import { Link } from 'react-router-dom';

const CatLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="38" fill="white"/>
    <polygon points="28,30 22,10 38,25" fill="white"/>
    <polygon points="72,30 78,10 62,25" fill="white"/>
    <ellipse cx="50" cy="55" rx="28" ry="26" fill="white"/>
    <ellipse cx="40" cy="50" rx="5" ry="6" fill="#1a1a1a"/>
    <ellipse cx="60" cy="50" rx="5" ry="6" fill="#1a1a1a"/>
    <ellipse cx="40" cy="51" rx="2" ry="4" fill="white"/>
    <ellipse cx="60" cy="51" rx="2" ry="4" fill="white"/>
    <polygon points="50,57 47,61 53,61" fill="#1a1a1a"/>
    <line x1="20" y1="60" x2="40" y2="62" stroke="#1a1a1a" strokeWidth="1.5"/>
    <line x1="20" y1="65" x2="40" y2="64" stroke="#1a1a1a" strokeWidth="1.5"/>
    <line x1="60" y1="62" x2="80" y2="60" stroke="#1a1a1a" strokeWidth="1.5"/>
    <line x1="60" y1="64" x2="80" y2="65" stroke="#1a1a1a" strokeWidth="1.5"/>
    <path d="M25 85 C10 75 5 90 20 88" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
  </svg>
);

const Footer = () => {
  return (
    <footer style={{
      background: '#1a1a1a',
      color: '#ffffff',
      padding: '3rem',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid #333',
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <CatLogo />
            <p style={{
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}>
              CAT MEMES
            </p>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#aaa',
            lineHeight: '1.7',
            maxWidth: '220px',
          }}>
            A collection of the internet's most beloved cat memes — from crying cats to peaceful leaf hats.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p style={{
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '1rem',
          }}>
            Navigation
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[['/', 'Home'], ['/about', 'About'], ['/articles', 'Articles']].map(([path, label]) => (
              <li key={path}>
                <Link
                  to={path}
                  style={{ fontSize: '13px', color: '#ccc', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#ccc'}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <p style={{
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '1rem',
          }}>
            About
          </p>
          <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.7' }}>
            Dedicated to cats and their chaotic, wholesome, and dramatic internet presence.
            Because every mood has a cat meme. 🐱
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p style={{ fontSize: '11px', color: '#666' }}>
          © 2024 Cat Memes. All rights reserved.
        </p>
        <p style={{ fontSize: '11px', color: '#666' }}>
          Made with 🐾 and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;