import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return (
      <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
        <section style={{ background: '#f5f5f5', borderBottom: '1px solid #e0e0e0', padding: '3rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>
              Article not found
            </h1>
            <Button to="/articles">Back to Articles</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
      <section style={{ background: '#f5f5f5', borderBottom: '1px solid #e0e0e0', padding: '3rem' }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Button to="/articles" variant="outline">Back to Articles</Button>
          </div>
          <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Article
          </p>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.2', marginBottom: '0.5rem' }}>
            {article.title}
          </h1>
          <p style={{ fontSize: '13px', color: '#888' }}>
            {article.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </p>
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '3rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #c8c8c8', marginBottom: '2rem' }}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {article.content.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '15px', color: '#444', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div style={{ marginTop: '3rem', borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem' }}>
            <Button to="/articles" variant="outline">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;