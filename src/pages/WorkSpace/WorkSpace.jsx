import './WorkSpace.css'
import { MdArrowOutward } from "react-icons/md";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import floraPic from './../../assets/images/flora-project-pic.png'
import estateInterface from './../../assets/images/real-estate-interface.png'
import Edupress from './../../assets/images/Edupress.png'
import dashback from './../../assets/images/dashback.png'
import simpleinterfacewebsite from './../../assets/images/simple-interface-website.png'
import { Navigate } from 'react-router-dom';

const WorkSpace = () => {

  const projects = [
    {
      id: 1,
      title: "Flora Project",
      tech: "HTML - CSS",
      image: floraPic,
      github: "https://roaazoman3221.github.io/Flora-Project/",
    },
    {
      id: 2,
      title: "Real Estate website Interface",
      tech: "HTML - CSS",
      image: estateInterface,
      github: "https://roaazoman3221.github.io/Real-Estate_website_Interface/",
    },
    {
      id: 3,
      title: "EduPress Mid Project",
      tech: "HTML - CSS",
      image: Edupress,
      github: "https://roaazoman3221.github.io/mid-project/",
    },
    {
      id: 4,
      title: "Dash Back Website",
      tech: "Javascript - CSS - React",
      image: dashback,
      github: "https://roaazoman3221.github.io/simple-website/",
    },
    {
      id: 5,
      title: "Simple Interface Website",
      tech: "Javascript - CSS - React",
      image: simpleinterfacewebsite,
      github: "https://roaazoman3221.github.io/simple-interface-website/",
    },
  ];

  return (
    <section className="projects container" id="projects">

      <div className="workspace-text">

        <div className="workspace-description">
          <h3 className='portfolio'>portfolio</h3>

          <h2 className='workspace-title'>
            My Creative Works Latest <span>Projects</span>
          </h2>
        </div>

        <button
          className="github-btn"
          onClick={() => window.open("https://github.com/roaazoman3221", "_blank")}
        >
          View Github <MdArrowOutward />
        </button>

      </div>

      <div className="workspace-content">

        {projects.map((project) => (

          <div className="card" key={project.id}>

            <div className="project-pics">

              <img src={project.image} alt={project.title} />

              <a
                href={project.github}
                target="_blank"
                className="black-hover"
              >
                View
              </a>

            </div>

            <h3>{project.title}</h3>

            <div className="techs">
              <p>{project.tech}</p>

              <a href={project.github} target="_blank">
                <LuCircleArrowOutUpRight className='arrow-share'/>
              </a>
            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default WorkSpace