"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Learning school",
    description: "This is a community driven platform to share content.Build with motive to share knowledge and acess them by tags searching. Also integrated real time chat to help connect better.",
    image: "/images/projects/frontpage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aviral7060/Code-Manager",
    previewUrl: "https://winter-school-for-iciss-591i.vercel.app/",
  },
  {
    id: 2,
    title: "Educonnect",
    description: "Developed a user-friendly and interactive UI for educators and learners that is developed over dynamic and responsive user interfaces using ReactJS.",
    image: "/images/projects/educonnect.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aviral7060/educonnect",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Course Registration & Time Table Generation",
    description: "Develop a user-friendly website for student course registration during each semester, optimizing the selection and registration process within specific timeframes.  ",
    image: "/images/projects/cr-tg.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aviral7060/CR_TG",
    previewUrl: "https://cr-tg.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Site",
    description: "This website shows my Portfolio.",
    image: "/images/projects/ps.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aviral7060/Portfolio-site",
    previewUrl: "https://portfolio-site-mocha-rho.vercel.app/",
  },
  {
    id: 5,
    title: "Frontend Testing Intern At Housing.com",
    description: "Performed unit testing to ensure each component renders correctly, achieving comprehensive statement,branch, and function coverage. ",
    image: "/images/projects/hi.png",
    tag: ["All", "Internship"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Internship"
          isSelected={tag === "Internship"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
