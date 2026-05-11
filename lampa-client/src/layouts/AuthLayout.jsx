import { Outlet } from 'react-router-dom';

const CatLogo = () => (
  <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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

const AuthLayout = () => {
  return (
    <div style={{ display: 'grid', minHeight: '100vh', width: '100%', gridTemplateColumns: '1fr 1fr' }}>

      {/* Left decorative panel */}
      <div style={{
        background: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '3rem',
      }}>
        <CatLogo />
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: '700',
          color: '#ffffff',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          CAT MEMES
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#888',
          textAlign: 'center',
          maxWidth: '220px',
          lineHeight: '1.7',
        }}>
          The internet's most iconic cat memes, all in one place. 
        </p>
      </div>

      {/* Right form panel */}
      <main style={{
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        padding: '2.5rem 4rem',
        overflowY: 'auto',
      }}>
        <div style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AuthLayout;