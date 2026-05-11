import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputStyle = {
  width: '100%',
  border: '1.5px solid #d0d0d0',
  borderRadius: '8px',
  background: '#f9f9f9',
  padding: '10px 14px',
  fontSize: '13px',
  color: '#1a1a1a',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};

const SignInPage = () => {
  return (
    <>
      {/* Cat logo */}
      <div style={{ marginBottom: '2rem' }}>
        <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
      </div>

      <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.4rem' }}>
        Welcome back 
      </h1>
      <p style={{ fontSize: '13px', color: '#888', marginBottom: '2rem', lineHeight: '1.6' }}>
        Log in to your Cat Memes account.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label htmlFor="signin-email" style={{ fontSize: '13px', fontWeight: '500', color: '#555', display: 'block', marginBottom: '0.4rem' }}>
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#1a1a1a'}
            onBlur={e => e.target.style.borderColor = '#d0d0d0'}
          />
        </div>

        <div>
          <label htmlFor="signin-password" style={{ fontSize: '13px', fontWeight: '500', color: '#555', display: 'block', marginBottom: '0.4rem' }}>
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#1a1a1a'}
            onBlur={e => e.target.style.borderColor = '#d0d0d0'}
          />
          <p style={{ fontSize: '11px', color: '#aaa', marginTop: '0.4rem' }}>
            Minimum 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '12px', color: '#555', cursor: 'pointer' }}>
            <input type="checkbox" style={{ accentColor: '#1a1a1a', cursor: 'pointer' }} />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            style={{ fontSize: '12px', color: '#888', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'color 0.15s' }}
            onMouseEnter={e => e.target.style.color = '#1a1a1a'}
            onMouseLeave={e => e.target.style.color = '#888'}
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary">Log In</Button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <Button type="button" variant="outline">Log In with Google</Button>
          <Button type="button" variant="outline">Log In with Apple</Button>
        </div>
      </form>

      <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem', fontSize: '13px', color: '#888' }}>
        No account yet?{' '}
        <Link
          to="/auth/signup"
          style={{ fontWeight: '700', color: '#1a1a1a', textDecoration: 'none', transition: 'opacity 0.15s' }}
          onMouseEnter={e => e.target.style.opacity = '0.7'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;