import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

function Cards() {
  const animationVariants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 50 },
  };

  return (
    <div data-scroll data-scroll-speed=".2" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between" ref={ref}>
                <div className="flex flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-white">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-white-50 px-3 py-1.5 font-medium text-white hover:bg-white-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <motion.h3
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      variants={animationVariants}
                      transition={{ duration: 0.5 }}
                      className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white"
                    >
                      <a href={post.href}>
                       <span className="absolute inset-0" />
  {post.title}
</a>
</motion.h3>
<motion.p
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
  variants={animationVariants}
  transition={{ duration: 0.8 }}
  className="mt-5 line-clamp-3 text-sm leading-6 text-white"
>
  {post.description}
</motion.p>
</div>
<div className="relative mt-8 flex items-center gap-x-4">
  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-white-50" />
  <div className="text-sm leading-6">
    <p className="font-semibold text-white">
      <a href={post.author.href}>
        <span className="absolute inset-0" />
        {post.author.name}
      </a>
    </p>
    <p className="text-white-600">{post.author.role}</p>
  </div>
</div>
</div>
<img src={post.author.imageUrl} alt={post.author.name} className="ml-4 h-[40vh] w-[40vh] rounded-lg object-cover absolute right-[150px] lg:right-[50px] md:h-[30vh] md:w-[30vh] sm:h-[20vh] sm:w-[20vh]" />
</article>
);
})}
</div>
</div>
</div>
);
}

export default Cards;