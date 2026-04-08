import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
  const base = {
    display: 'inline-block',
    padding: '7px 20px',
    borderRadius: '999px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'background 0.18s, color 0.18s',
    textDecoration: 'none',
  };

  const styles = {
    primary: {
      ...base,
      background: '#1a1a1a',
      color: '#fff',
      border: '1.5px solid #1a1a1a',
    },
    outline: {
      ...base,
      background: 'transparent',
      color: '#1a1a1a',
      border: '1.5px solid #1a1a1a',
    },
    secondary: {
      ...base,
      background: 'transparent',
      color: '#1a1a1a',
      border: '1.5px solid #1a1a1a',
    },
  };

  const style = styles[variant] || styles.outline;

  if (to) {
    return <Link to={to} style={style} className={className}>{children}</Link>;
  }

  return (
    <button style={style} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;