import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Samuvel Durai C",
    role: "Founder & CEO",
    specialty: "Digital Strategy & Innovation",
  },
  {
    name: "Muthu Rajesh S",
    role: "Co-Founde & Project Manager",
    specialty: "Strategy & Management",
  },
  {
    name: "Govindhasamy M",
    role: "Software Developer",
    specialty: "Full-Stack Development",
  },
  {
    name: "Kishore V",
    role: "Research Analyst",
    specialty: "Data Analytics",
  },
  {
    name: "Ranjith Kumar L",
    role: "UI/UX & Graphics Designer",
    specialty: "User-Centric Interfaces",
  },
  {
    name: "HariKrishnan K",
    role: "Partnership Manager",
    specialty: "B2B Client Management",
  },
  {
    name: "ShriRam M R",
    role: "Client Manager",
    specialty: "Communication & Negotiation",
  },
  {
    name: "Santhosh Kumar S ",
    role: "Marketing Executive",
    specialty: "Market Research & Analysis",
  },
  {
    name: "Srinath S",
    role: "Marketing",
    specialty: "Promotion & Outreach",
  },
  {
    name: "Prasath S",
    role: "Sales Manager",
    specialty: "Client Relationship Management",
  },
  {
    name: "MeikandaMoorthi G",
    role: "Graphic Designer & Video Editor",
    specialty: "Visual Design Expertise",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-gray/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">The Team</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">
              Driven by <span className="text-gradient">Innovation & Detail</span>
            </h3>
          </div>
          <p className="text-white/50 max-w-sm">
            Our experts are dedicated to turning your ideas into impactful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-brand-dark hover:bg-white/[0.03] transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold mb-1 group-hover:text-brand-gold transition-colors">{member.name}</h4>
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-brand-gold transition-colors" size={24} />
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Specializing in {member.specialty}, ensuring every project meets our high standards of excellence.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

