import Button from '../components/Button';
import reporter from '../assets/report.jpg'

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border-2 border-zinc-900">
            <img src={reporter} alt="Phil the Cat Reporter" className="h-120 w-full object-cover"/>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Us 🐾
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900">
              We are the world's most unserious cat news outlet.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
              Cat News was founded in 2024 by a group of cat lovers who were tired of serious news. 
              We cover only the most important stories — like which cat knocked over the most things today, 
              and whether Grumpy Cat has smiled yet (she hasn't). Our lead reporter Phil has never missed a story. He has, however, missed several naps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/articles">Read Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Our Team
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">The Cats Behind the News</h2>
        </div>
        <div className="mt-6 space-y-4">
          {[
            { 
              title: 'Phil — Lead Reporter', 
              desc: 'Phil has been reporting cat news since 2019. He wears a suit. He means business. Do not let him near your mic stand.' 
            },
            { 
              title: 'Chairman Meow — Founder & CEO', 
              desc: 'Has not attended a single meeting. Currently napping on the server.' 
            },
            { 
              title: 'Sir Flops-a-Lot — Chief Content Officer', 
              desc: 'Writes all articles from a loaf position. Never stands up. Extremely productive.' 
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;