import './WorkSpace.css'
import { MdArrowOutward } from "react-icons/md";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { projects } from "./../../Data/Projects.js";
import { Link } from 'react-router-dom';

const WorkSpace = () => {

  

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

              <Link
                to={`/project/${project.id}`}
                className="black-hover"
              >
                View
              </Link>

            </div>

            <h3>{project.title}</h3>

            <div className="techs">

              <p>{project.tech}</p>

              <Link to={`/project/${project.id}`}>
                <LuCircleArrowOutUpRight className='arrow-share'/>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default WorkSpace