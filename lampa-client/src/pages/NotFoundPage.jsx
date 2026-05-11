import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '500px', padding: '2rem' }}>
        <p style={{ fontSize: '120px', fontWeight: '700', color: '#1a1a1a', lineHeight: '1', marginBottom: '0' }}>
          404
        </p>
        <p style={{ fontSize: '11px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Page Not Found
        </p>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>
          Looks like this cat ran away.
        </h1>
        <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>
          The page you are looking for does not exist or has been moved. Try going back home.
        </p>
        <Button to="/" variant="primary">Back Home</Button>
      </div>
    </div>
  );
}

export default NotFoundPage;