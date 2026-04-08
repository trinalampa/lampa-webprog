import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-grid">
      {articles.map((article, index) => (
        <article
          key={article.name}
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1.5px solid #c8c8c8',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'box-shadow 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
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
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.35' }}>
              {article.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6', flex: 1 }}>
              {article.content[0].substring(0, 100)}...
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <Link to={`/articles/${article.name}`}>
                <Button variant="outline">Read More</Button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;