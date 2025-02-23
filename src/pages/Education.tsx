
import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { GraduationCap, School, University } from 'lucide-react';

interface Education {
  institution: string;
  course: string;
  duration: string;
  grade: string;
  description: string;
  icon: any;
  image: string;
}

const educationData: Education[] = [
  {
    institution: "P. E. S. College Of Engineering, Mandya",
    course: "Information Science and Engineering",
    duration: "Dec 2021 - Jul 2025",
    grade: "7.98 CGPA",
    description: "I am currently pursuing a Bachelor's degree in Information Science and Engineering at P. E. S. College Of Engineering, Mandya.",
    icon: University,
    image: "/src/images/college.png"
  },
  {
    institution: "Nisarga Independent PU College, Kollegal",
    course: "PCMB",
    duration: "2019 - 2021",
    grade: "90.6%",
    description: "I completed my class 11 & 12 school education at Nisarga Independent PU College, Kollegal.",
    icon: School,
    image: "/src/images/pu.png"
  },
  {
    institution: "Jawwahar Navodaya Vidyalaya, Honadarabalu",
    course: "6th - 10th",
    duration: "2014 - 2019",
    grade: "83.6%",
    description: "I completed my class 6 - 10 education at Jawwahar Navodaya Vidyalaya, Honadarabalu, Chamarajnagar. And PROUD TO BE A NAVODAYAN.",
    icon: GraduationCap,
    image: "/src/images/school.png"
  }
];

const Education = () => {
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    educationRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-neutral to-neutral">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Educational Background
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Each step in my academic journey has shaped my perspective and skills
          </p>
        </div>

        <div className="grid gap-16">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              ref={(el) => (educationRefs.current[index] = el)}
              className="opacity-0"
            >
              <div className="relative">
                {/* Large year display */}
                <div className="absolute -left-4 top-0 text-9xl font-bold text-primary/5 -z-10 select-none">
                  {edu.duration.split(' - ')[0].slice(-4)}
                </div>

                <div className="grid md:grid-cols-[2fr,3fr] gap-8 items-center bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500">
                  {/* Left side - Image */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl transform rotate-6 scale-95 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105" />
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-[300px] object-cover rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
                    />
                  </div>

                  {/* Right side - Content */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <edu.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{edu.institution}</h2>
                        <p className="text-primary">{edu.course}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                        {edu.duration}
                      </span>
                      <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                        Grade: {edu.grade}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
