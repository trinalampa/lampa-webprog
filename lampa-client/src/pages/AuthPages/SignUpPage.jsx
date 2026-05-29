import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

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

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
};

const labelStyle = {
  fontSize: '13px',
  fontWeight: '500',
  color: '#555',
  display: 'block',
  marginBottom: '0.4rem',
};

const SignUpPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    password: '',
    username: '',
    address: '',
  });
  const [error, setError]     = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!/^\d+$/.test(form.age.trim())) {
      setError('Age must be a number.');
      return;
    }
    if (!/^\d{11}$/.test(form.contactNumber.trim())) {
      setError('Contact number must be exactly 11 digits.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (/\s/.test(form.username.trim())) {
      setError('Username must not contain spaces.');
      return;
    }

    try {
      await createUser({
        firstName:     form.firstName.trim(),
        lastName:      form.lastName.trim(),
        age:           form.age.trim(),
        gender:        form.gender.trim().toLowerCase(),
        contactNumber: form.contactNumber.trim(),
        email:         form.email.trim().toLowerCase(),
        password:      form.password,
        username:      form.username.trim().toLowerCase(),
        address:       form.address.trim(),
        type:          'viewer',
        isActive:      true,
      });
      setSuccess('Account created! Redirecting to login...');
      setTimeout(() => navigate('/auth/signin'), 1500);
    } catch (err) {
      setError(err.response?.data?.message ?? 'Sign up failed. Please try again.');
    }
  };

  const focus = (e) => (e.target.style.borderColor = '#1a1a1a');
  const blur  = (e) => (e.target.style.borderColor = '#d0d0d0');

  return (
    <>
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

      {error   && <p style={{ color: 'red',   fontSize: '13px', marginBottom: '1rem' }}>{error}</p>}
      {success && <p style={{ color: 'green', fontSize: '13px', marginBottom: '1rem' }}>{success}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="firstName" style={labelStyle}>First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="Juan"
              value={form.firstName} onChange={handleChange} required
              style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label htmlFor="lastName" style={labelStyle}>Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="dela Cruz"
              value={form.lastName} onChange={handleChange} required
              style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="age" style={labelStyle}>Age</label>
            <input id="age" name="age" type="text" placeholder="20"
              value={form.age} onChange={handleChange} required
              style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label htmlFor="gender" style={labelStyle}>Gender</label>
            <select id="gender" name="gender" value={form.gender}
              onChange={handleChange} required
              style={selectStyle} onFocus={focus} onBlur={blur}>
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contactNumber" style={labelStyle}>Contact Number</label>
          <input id="contactNumber" name="contactNumber" type="text" placeholder="09XXXXXXXXX"
            value={form.contactNumber} onChange={handleChange} required
            style={inputStyle} onFocus={focus} onBlur={blur} />
          <p style={{ fontSize: '11px', color: '#aaa', marginTop: '0.4rem' }}>
            Must be exactly 11 digits.
          </p>
        </div>

        <div>
          <label htmlFor="signup-email" style={labelStyle}>Email</label>
          <input id="signup-email" name="email" type="email" placeholder="you@example.com"
            autoComplete="email" value={form.email} onChange={handleChange} required
            style={inputStyle} onFocus={focus} onBlur={blur} />
        </div>

        <div>
          <label htmlFor="username" style={labelStyle}>Username</label>
          <input id="username" name="username" type="text" placeholder="juandelacruz"
            value={form.username} onChange={handleChange} required
            style={inputStyle} onFocus={focus} onBlur={blur} />
          <p style={{ fontSize: '11px', color: '#aaa', marginTop: '0.4rem' }}>
            No spaces allowed.
          </p>
        </div>

        <div>
          <label htmlFor="signup-password" style={labelStyle}>Password</label>
          <input id="signup-password" name="password" type="password" placeholder="••••••••"
            autoComplete="new-password" value={form.password} onChange={handleChange} required
            style={inputStyle} onFocus={focus} onBlur={blur} />
          <p style={{ fontSize: '11px', color: '#aaa', marginTop: '0.4rem' }}>
            At least 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        <div>
          <label htmlFor="address" style={labelStyle}>Address</label>
          <textarea id="address" name="address" placeholder="123 Main St, City"
            value={form.address} onChange={handleChange} required rows={3}
            style={{ ...inputStyle, resize: 'vertical' }} onFocus={focus} onBlur={blur} />
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