// components/EducationTimeline.jsx
'use client';
import { useInView } from 'react-intersection-observer';

const educationData = [
  {
    institution: "EMSI RABAT",
    program: "Engineering Student in Software Informatics",
    duration: "2024 – Present (Expected Graduation: 2027)",
    side: "left",
  },
  {
    institution: "First Preparatory Classes of High Schools",
    program: "MP (Mathematics-Physics)",
    duration: "2023 – 2024",
    side: "right",
  },
  {
    institution: "First Preparatory Classes of High Schools",
    program: "MPSI (Mathematics-Physics-Engineering Sciences)",
    duration: "2022 – 2023",
    side: "left",
  },
  {
    institution: "ALMANSOUR EDAHBI High School",
    program: "High School Diploma (Mathematics Science)",
    duration: "2021 – 2022",
    side: "right",
  },
];

const TimelineItem = ({ data, isLast, index }) => {
  // Use useInView to detect when the element is visible
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // 10% of the item must be visible
  });

  const baseClasses = "transition-all duration-700 ease-out";
  const animationClasses = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    // The relative container for the timeline segment
    <div
      ref={ref}
      className={`relative ${isLast ? 'pb-0' : 'pb-10'} ${baseClasses} ${animationClasses}`}
      style={{ transitionDelay: `${index * 150}ms` }} // Staggered delay for each item
    >

      {/* 1. The Vertical Line Connector (Chain) - This now appears with the element */}
      {!isLast && (
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-700 h-full ${baseClasses} ${inView ? 'opacity-100' : 'opacity-0'}`}></div>
      )}

      {/* 2. The Circle (Node) in the Middle */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 -top-1 ${baseClasses} ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <div className="w-4 h-4 rounded-full bg-[#14b8a6] border-2 border-gray-900 shadow-xl"></div>
      </div>

      {/* 3. The Content Card */}
      <div
        className={`flex items-center w-full ${data.side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div className="w-1/2"></div> {/* Empty space to push card to the side */}

        <div className={`w-1/2 px-4 ${data.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
          <div className="p-4 rounded-lg bg-[#1e293b] shadow-xl hover:shadow-2xl hover:border-[#14b8a6] transition-all duration-300">
            <p className="text-sm text-[#14b8a6] font-medium">{data.duration}</p>
            <h3 className="text-lg font-semibold text-white mt-1">{data.institution}</h3>
            <p className="text-gray-400 text-sm">{data.program}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const EducationTimeline = () => {
  return (
    <section className="py-16 bg-[#0a0a0a]" id="education">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-white mb-12">My Education</h2>

        {/* The Main Timeline Container */}
        <div className="relative">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              isLast={index === educationData.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
