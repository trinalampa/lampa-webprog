import Button from '../components/Button';
import grumpy from '../assets/grumpy.jpg'
import ceiling from '../assets/ceiling.jpg'
import nyan from '../assets/nyan.jpg'

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-0">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Breaking Mews 🐾
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to Cat News — Your Cat Meme Journal
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
              Your daily dose of cat memes and drama.
            </p>
            <div className="mt-6">
              <Button to="/articles" variant="primary">Read Latest Mews</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border-2 border-zinc-900">
            <img 
              src="https://i.imgflip.com/1e7ql7.jpg"
              alt="Meme Cat"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Cat Stats
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Today's Meme Numbers
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '99', label: 'Memes Posted' },
            { value: '07', label: 'Naps Taken' },
            { value: '42', label: 'Things Knocked Over' },
            { value: '01', label: 'Care Given' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">{item.value}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Memes
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            This Week's Top Cats
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { 
              title: 'Grumpy Cat Returns', 
              desc: 'Sources confirm Grumpy Cat still does not care about your problems.',
              img: grumpy
            },
            { 
              title: 'Ceiling Cat is Watching', 
              desc: 'Local ceiling cat spotted watching humans do absolutely nothing productive.',
              img: ceiling
            },
            { 
              title: 'Nyan Cat Anniversary', 
              desc: 'Nyan Cat celebrates another year of flying through space with zero explanation.',
              img: nyan
            },
          ].map((card) => (
            <article key={card.title} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="overflow-hidden rounded-[1.25rem]">
                <img src={card.img} alt={card.title} className="h-48 w-full object-cover"/>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{card.desc}</p>
              <Button className="mt-4" variant="primary">Read More</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;