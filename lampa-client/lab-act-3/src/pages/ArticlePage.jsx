import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(a => a.name === name);

  if (!article) {
    return (
      <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
        <section style={{ background: '#f5f5f5', padding: '2.5rem 3rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h1 style={{ fontWeight: '700', fontSize: '2rem', color: '#1a1a1a', marginBottom: '1rem' }}>
              Article not found
            </h1>
            <Button to="/articles" variant="outline">Back to Articles</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>

      <section style={{
        background: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
        padding: '2.5rem 3rem',
      }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Button to="/articles" variant="outline">← Back to Articles</Button>
          </div>
          <p style={{
            fontSize: '10px',
            fontWeight: '600',
            color: '#888',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Article
          </p>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: '#1a1a1a',
            lineHeight: '1.2',
          }}>
            {article.title}
          </h1>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '2.5rem 3rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            width: '100%',
            aspectRatio: '4/3',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '2rem',
            border: '1.5px solid #e0e0e0',
          }}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {article.content.map((paragraph, index) => (
              <p key={index} style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: '#4a4540',
                whiteSpace: 'pre-wrap',
              }}>
                {paragraph}
              </p>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem' }}>
            <Button to="/articles" variant="outline">Back to Articles</Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ArticlePage;