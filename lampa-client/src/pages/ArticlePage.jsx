import Button from '../components/Button';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import grumpy from '../assets/grumpy.jpg';

const articles = [
  { image: cat1, label: 'Cat News Daily', title: 'Cat Stares Into Camera for 3 Hours', desc: 'Witnesses report feeling personally judged. Cat has not commented.' },
  { image: cat2, label: 'Cat News Daily', title: 'Kittens Declare War on Each Other', desc: 'Two kittens engaged in what experts are calling the most chaotic battle of 2026.' },
  { image: cat3, label: 'Cat News Daily', title: 'Local Cat Judging You From Bed', desc: 'Cat spotted giving the most disappointed look ever recorded. Cause unknown.' },
  { image: grumpy, label: 'Cat News Daily', title: 'Grumpy Cat Still Not Happy', desc: 'In a shocking turn of events, Grumpy Cat remains unimpressed with everything.' },
];

const ArticlePage = () => {
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
          Cat News Daily
        </p>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '1.5rem' }}>
          This Week's Top Stories
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {articles.map((article, i) => (
            <article key={i} style={{ background: '#ffffff', border: '1.5px solid #c8c8c8', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {article.label}
                </p>
                <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.4rem' }}>{article.title}</h3>
                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5', marginBottom: '0.75rem' }}>{article.desc}</p>
                <Button variant="outline">Read More</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;