import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
      <section style={{
        borderBottom: '1px solid #e0e0e0',
        paddingBottom: '3rem',
        marginBottom: '3rem',
      }}>
        <p style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#888',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Featured Articles
        </p>
        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '700',
          color: '#1a1a1a',
          lineHeight: '1.2',
          maxWidth: '600px',
          marginBottom: '1rem',
        }}>
          The internet's most iconic cat memes, all in one place
        </h1>
        <p style={{
          fontSize: '15px',
          color: '#666',
          maxWidth: '480px',
          lineHeight: '1.7',
          marginBottom: '1.5rem',
        }}>
          From crying cats to dramatic flops, screaming blurs to peaceful leaf hats —
          explore the cat memes that took over the internet and captured every human emotion.
        </p>
        <Button to="/articles">View All Cats</Button>
      </section>
    </div>
  );
};

export default HomePage;