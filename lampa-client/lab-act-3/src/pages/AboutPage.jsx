const AboutPage = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '4rem 2rem' }}>
      <p style={{
        fontSize: '11px',
        fontWeight: '600',
        color: '#888',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
        About
      </p>
      <h1 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '1.5rem',
        lineHeight: '1.2',
      }}>
        About Cat Memes 🐱
      </h1>
      <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        Welcome to Cat Memes — a shrine dedicated to the funniest, most dramatic,
        and most wholesome cats the internet has ever produced.
      </p>
      <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        Whether you're having a bad day and need a crying cat to relate to,
        or a peaceful leaf hat cat to calm your soul — we've got the perfect
        cat meme for every mood and every moment.
      </p>
      <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8' }}>
        Built with React + Vite + React Router v6 as a lab activity exploring
        component structure, routing, props, and state management. 🐾
      </p>
    </div>
  );
};

export default AboutPage;