import Button from '../components/Button';
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import grumpy from '../assets/grumpy.jpg'

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-0">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Latest Articles 🐾
          </p>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900">
            Breaking Mews — Today's Top Stories
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
            All the cat news that's fit to print. And some that isn't.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { 
              title: 'Cat Stares Into Camera for 3 Hours', 
              desc: 'Witnesses report feeling personally judged. Cat has not commented.',
              img: cat1
            },
            { 
              title: 'Kittens Declare War on Each Other', 
              desc: 'Two kittens engaged in what experts are calling the most chaotic battle of 2024.',
              img: cat2
            },
            { 
              title: 'Local Cat Judging You From Bed', 
              desc: 'Cat spotted giving the most disappointed look ever recorded. Cause unknown.',
              img: cat3
            },
            { 
              title: 'Grumpy Cat Still Not Happy', 
              desc: 'In a shocking turn of events, Grumpy Cat remains unimpressed with everything.',
              img: grumpy
            },
          ].map((article) => (
            <article key={article.title} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="overflow-hidden rounded-[1.25rem]">
                <img src={article.img} alt={article.title} className="h-48 w-full object-cover"/>
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Cat News Daily
              </p>
              <h3 className="mt-2 text-lg font-bold leading-tight text-zinc-900">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {article.desc}
              </p>
              <Button className="mt-4" variant="primary">Read More</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;