import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skillsData = {
  frontend: [
    { name: 'React Js', icon: '⚛️', color: '#61DAFB' },
    { name: 'HTML', icon: '🌐', color: '#E34F26' },
    { name: 'CSS', icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
  ],
  backend: [
    { name: 'Node Js', icon: '🟢', color: '#339933' },
    { name: 'Express Js', icon: '⚡', color: '#000000' },
    { name: 'MySQL', icon: '🗄️', color: '#4479A1' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
  ],
  others: [
    { name: 'Git', icon: '📚', color: '#F05032' },
    { name: 'GitHub', icon: '🐙', color: '#181717' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'VS Code', icon: '📝', color: '#007ACC' },
    { name: 'Postman', icon: '📮', color: '#FF6C37' },
    { name: 'Figma', icon: '🎨', color: '#F24E1E' },
  ],
};

const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => {
  return (
    <div
      className="group relative flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 
                 hover:border-primary/30 transition-all duration-300 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-2xl">{skill.icon}</span>
      <span className="font-medium text-white group-hover:text-primary transition-colors">
        {skill.name}
      </span>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
        style={{ backgroundColor: skill.color }}
      />
    </div>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-neutral to-neutral">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid gap-16">
          <div ref={(el) => (sectionRefs.current[0] = el)} className="opacity-0">
            <SkillSection title="Frontend" skills={skillsData.frontend} />
          </div>
          <div ref={(el) => (sectionRefs.current[1] = el)} className="opacity-0">
            <SkillSection title="Backend" skills={skillsData.backend} />
          </div>
          <div ref={(el) => (sectionRefs.current[2] = el)} className="opacity-0">
            <SkillSection title="Others" skills={skillsData.others} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
