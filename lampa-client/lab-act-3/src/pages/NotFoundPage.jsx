import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        background: '#ffffff',
        border: '1.5px solid #c8c8c8',
        borderRadius: '20px',
        padding: '3rem 4rem',
        textAlign: 'center',
        maxWidth: '480px',
        width: '100%',
      }}>
        {/* Big 404 */}
        <p style={{
          fontSize: '96px',
          fontWeight: '700',
          color: '#e0e0e0',
          lineHeight: '1',
          marginBottom: '0.5rem',
          letterSpacing: '-0.04em',
        }}>
          404
        </p>

        <h1 style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '0.75rem',
        }}>
          Page Not Found
        </h1>

        <p style={{
          fontSize: '13px',
          color: '#888',
          lineHeight: '1.7',
          marginBottom: '2rem',
        }}>
          The link you followed to get here must be broken,
          or the page has been removed.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <Link to="/" style={{
            padding: '9px 24px',
            borderRadius: '999px',
            background: '#1a1a1a',
            color: '#fff',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Go Home
          </Link>
          <Link to="/articles" style={{
            padding: '9px 24px',
            borderRadius: '999px',
            background: 'transparent',
            color: '#1a1a1a',
            border: '1.5px solid #1a1a1a',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            View Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;