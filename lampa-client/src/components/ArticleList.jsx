import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
    }}>
      {articles.map((article, index) => {
        const preview = Array.isArray(article.content)
          ? article.content[0]
          : article.content;

        return (
          <article
            key={article._id ?? article.slug}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1.5px solid #c8c8c8',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img
                src={article.image}
                alt={article.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Article {String(index + 1).padStart(2, '0')}
              </p>
              <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.35' }}>
                {article.title}
              </h3>
              <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6', flex: 1 }}>
                {preview?.substring(0, 100)}...
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link to={`/articles/${article.slug}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleList;