import { Link, NavLink } from 'react-router-dom';

const CatLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="38" fill="black"/>
    <polygon points="28,30 22,10 38,25" fill="black"/>
    <polygon points="72,30 78,10 62,25" fill="black"/>
    <ellipse cx="50" cy="55" rx="28" ry="26" fill="black"/>
    <ellipse cx="40" cy="50" rx="5" ry="6" fill="white"/>
    <ellipse cx="60" cy="50" rx="5" ry="6" fill="white"/>
    <ellipse cx="40" cy="51" rx="2" ry="4" fill="black"/>
    <ellipse cx="60" cy="51" rx="2" ry="4" fill="black"/>
    <polygon points="50,57 47,61 53,61" fill="white"/>
    <line x1="20" y1="60" x2="40" y2="62" stroke="white" strokeWidth="1.5"/>
    <line x1="20" y1="65" x2="40" y2="64" stroke="white" strokeWidth="1.5"/>
    <line x1="60" y1="62" x2="80" y2="60" stroke="white" strokeWidth="1.5"/>
    <line x1="60" y1="64" x2="80" y2="65" stroke="white" strokeWidth="1.5"/>
    <path d="M25 85 C10 75 5 90 20 88" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round"/>
  </svg>
);

const NavBar = () => {
  const linkStyle = (isActive) => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: isActive ? '#1a1a1a' : '#888',
    padding: '4px 2px',
    transition: 'color 0.15s',
  });

  return (
    <nav style={{
      background: '#ffffff',
      borderBottom: '1px solid #e0e0e0',
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '56px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CatLogo />
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: '700',
          color: '#1a1a1a',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          CAT MEMES
        </span>
      </Link>

      <ul style={{ display: 'flex', alignItems: 'center', gap: '1rem', listStyle: 'none' }}>
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => linkStyle(isActive)}
            onMouseEnter={e => e.target.style.color = '#1a1a1a'}
            onMouseLeave={e => e.target.style.color = '#888'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => linkStyle(isActive)}
            onMouseEnter={e => e.target.style.color = '#1a1a1a'}
            onMouseLeave={e => e.target.style.color = '#888'}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            style={({ isActive }) => linkStyle(isActive)}
            onMouseEnter={e => e.target.style.color = '#1a1a1a'}
            onMouseLeave={e => e.target.style.color = '#888'}
          >
            Articles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;