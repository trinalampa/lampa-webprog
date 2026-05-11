import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/article-content.js';

const ArticleListPage = () => {
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
      <section style={{ background: '#f5f5f5', borderBottom: '1px solid #e0e0e0', padding: '3rem' }}>
        <div style={{ maxWidth: '700px' }}>
          <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Latest Articles
          </p>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.2', marginBottom: '0.75rem' }}>
            Breaking Mews — Today's Top Stories
          </h1>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            All the cat news that's fit to print. And some that isn't.
          </p>
          <Button to="/" variant="outline">Back Home</Button>
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '2.5rem 3rem' }}>
        <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
          Featured Articles
        </p>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '1.5rem' }}>
          Article card grid
        </h2>
        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;