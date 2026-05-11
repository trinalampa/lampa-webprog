import Button from '../components/Button';
import cryingCat from '../assets/crying-cat.jpg';
import dramaticCat from '../assets/dramatic-cat.jpg';
import punchingCat from '../assets/punching-cat.jpg';
import happyLeafCat from '../assets/happy-leaf-cat.jpg';

const stats = [
  { value: '05', label: 'Cat Memes' },
  { value: '01', label: 'Crying Cats' },
  { value: '03', label: 'Angry Cats' },
  { value: '02', label: 'Peaceful Cats' },
];

const featureCards = [
  { image: cryingCat, label: 'Sad Cat', title: 'The Crying Cat', desc: 'The most emotionally relatable cat on the internet.' },
  { image: punchingCat, label: 'Fight Cat', title: 'The Punching Cat', desc: 'Always ready to throw hands. No reason needed.' },
  { image: happyLeafCat, label: 'Chill Cat', title: 'The Peaceful Cat', desc: 'One look at this cat and your stress drops immediately.' },
];

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

      <section style={{
        padding: '3rem',
        borderBottom: '1px solid #e0e0e0',
        background: '#f5f5f5',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
      }}>
        <div>
          <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Breaking Mews
          </p>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.2', marginBottom: '1rem' }}>
            Welcome to Cat News — Your Cat Meme Journal
          </h1>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '380px' }}>
            Your daily dose of cat memes and drama. From crying cats to peaceful leaf hats, we cover it all.
          </p>
          <Button to="/articles" variant="primary">Read Latest Mews</Button>
        </div>
        <div style={{ aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #c8c8c8' }}>
          <img src={dramaticCat} alt="Dramatic Cat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <section style={{ padding: '2rem 3rem', borderBottom: '1px solid #e0e0e0', background: '#ffffff' }}>
        <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Cat Stats
        </p>
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '1.5rem' }}>
          Today's Meme Numbers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ border: '1.5px solid #c8c8c8', borderRadius: '12px', padding: '1.25rem', background: '#f9f9f9' }}>
              <p style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.25rem' }}>{stat.value}</p>
              <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '2rem 3rem', background: '#f5f5f5' }}>
        <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Featured Memes
        </p>
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '1.5rem' }}>
          This Week's Top Cats
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {featureCards.map((card, i) => (
            <div key={i} style={{ background: '#ffffff', border: '1.5px solid #c8c8c8', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '10px', fontWeight: '600', color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{card.label}</p>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.4rem' }}>{card.title}</p>
                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;