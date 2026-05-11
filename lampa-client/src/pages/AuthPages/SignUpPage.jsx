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

const SignUpPage = () => {
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
        Create an account 
      </h1>
      <p style={{ fontSize: '13px', color: '#888', marginBottom: '2rem', lineHeight: '1.6' }}>
        Join Cat Memes and never miss a chaotic cat moment.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="first-name" style={{ fontSize: '13px', fontWeight: '500', color: '#555', display: 'block', marginBottom: '0.4rem' }}>
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Juan"
              autoComplete="given-name"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#1a1a1a'}
              onBlur={e => e.target.style.borderColor = '#d0d0d0'}
            />
          </div>
          <div>
            <label htmlFor="last-name" style={{ fontSize: '13px', fontWeight: '500', color: '#555', display: 'block', marginBottom: '0.4rem' }}>
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="dela Cruz"
              autoComplete="family-name"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#1a1a1a'}
              onBlur={e => e.target.style.borderColor = '#d0d0d0'}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" style={{ fontSize: '13px', fontWeight: '500', color: '#555', display: 'block', marginBottom: '0.4rem' }}>
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#1a1a1a'}
            onBlur={e => e.target.style.borderColor = '#d0d0d0'}
          />
        </div>

        <div>
          <label htmlFor="signup-password" style={{ fontSize: '13px', fontWeight: '500', color: '#555', display: 'block', marginBottom: '0.4rem' }}>
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#1a1a1a'}
            onBlur={e => e.target.style.borderColor = '#d0d0d0'}
          />
          <p style={{ fontSize: '11px', color: '#aaa', marginTop: '0.4rem' }}>
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="primary">Create Account</Button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <Button type="button" variant="outline">Sign Up with Google</Button>
          <Button type="button" variant="outline">Sign Up with Apple</Button>
        </div>
      </form>

      <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem', fontSize: '13px', color: '#888' }}>
        Already have an account?{' '}
        <Link
          to="/auth/signin"
          style={{ fontWeight: '700', color: '#1a1a1a', textDecoration: 'none', transition: 'opacity 0.15s' }}
          onMouseEnter={e => e.target.style.opacity = '0.7'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;