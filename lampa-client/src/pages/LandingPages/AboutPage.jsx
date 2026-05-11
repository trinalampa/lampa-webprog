import reportCat from '../../assets/report.jpg';
import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <section style={{ background: '#f5f5f5', borderBottom: '1px solid #e0e0e0', padding: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #c8c8c8' }}>
            <img src={reportCat} alt="Phil the Reporter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              About Us
            </p>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.2', marginBottom: '1rem' }}>
              We are the world's most unserious cat news outlet.
            </h1>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.7', marginBottom: '1rem' }}>
              Cat News was founded in 2026 by a group of cat lovers who were tired of serious news. We cover only the most important stories — like which cat knocked over the most things today, and whether Grumpy Cat has smiled yet (she hasn't).
            </p>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our lead reporter Phil has never missed a story. He has, however, missed several naps.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/articles" variant="outline">Read Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '3rem' }}>
        <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Our Team
        </p>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '1.5rem' }}>
          The Cats Behind the News
        </h2>
        <div style={{ border: '1.5px solid #e0e0e0', borderRadius: '12px', padding: '1.25rem', maxWidth: '500px' }}>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.4rem' }}>Phil — Lead Reporter</p>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
            Phil has been reporting cat news since 2019. He wears a suit. He means business. Do not let him near your mic stand.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;