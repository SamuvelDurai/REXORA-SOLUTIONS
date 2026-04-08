import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "5 Tips to Boost Your Brand with Tech",
    excerpt: "Discover strategies to enhance your brand visibility and engagement using the latest digital technologies.",
    category: "Strategy",
  },
  {
    title: "The Future of Mobile App Development",
    excerpt: "Explore emerging trends shaping how mobile apps are built and optimized for better experiences.",
    category: "Tech",
  },
  {
    title: "Designing for the Futuristic User",
    excerpt: "Learn key principles for creating modern, intuitive, and visually stunning user interfaces.",
    category: "Design",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-brand-gray/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Latest from <span className="text-gradient">Blog</span></h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-white/60 hover:text-brand-gold transition-colors">
            View all posts <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group cursor-pointer"
            >
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-6 px-3 py-1 rounded-full bg-brand-gold/10 w-fit">
                {post.category}
              </span>
              <h4 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors">{post.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Read More <ArrowUpRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
