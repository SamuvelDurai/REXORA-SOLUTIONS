import { motion } from "motion/react";
import { Code, Smartphone, Palette, Globe, FileText, Zap, Layout } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom, high-performance websites built with the latest technologies to drive results.",
    icon: <Globe className="text-brand-gold" size={32} />,
  },
  {
    title: "Mobile App Development",
    description: "Intuitive and powerful iOS and Android applications tailored to your business needs.",
    icon: <Smartphone className="text-brand-gold" size={32} />,
  },
  {
    title: "Brand Identity Design",
    description: "Unique visual identities that tell your story and resonate with your target audience.",
    icon: <Palette className="text-brand-gold" size={32} />,
  },
  {
    title: "Digital Marketing",
    description: "Strategic growth campaigns to increase your reach, engagement, and conversions.",
    icon: <Zap className="text-brand-gold" size={32} />,
  },
  {
    title: "Resume & Portfolio Building",
    description: "Professional personal branding to help you stand out in the competitive job market.",
    icon: <FileText className="text-brand-gold" size={32} />,
  },
  {
    title: "Landing Pages",
    description: "High-converting single-page sites designed to turn visitors into loyal customers.",
    icon: <Layout className="text-brand-gold" size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">
              Comprehensive Solutions for <span className="text-gradient">Digital Success</span>
            </h3>
          </div>
          <p className="text-white/50 max-w-sm">
            We combine technical excellence with creative vision to deliver impactful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all group"
            >
              <div className="mb-6 p-4 rounded-xl bg-brand-gold/10 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
