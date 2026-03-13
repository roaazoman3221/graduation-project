import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "./../../Data/Projects.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowBack, IoChevronBack, IoChevronForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "./ProjectDetails.css";

const ProjectDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (

    <section className="project-details container">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        <IoArrowBack className="left-arrow"/>
      </button>

      <div className="project-wrapper">

        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-info">

          <h2>{project.title}</h2>

          <p className="project-date">{project.date}</p>

          <p className="project-description">
            {project.description}
          </p>

          <p className="project-tech">
            <strong>Technologies:</strong> {project.tech}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            Github Repo
          </a>

        </div>

      </div>

      <h2 className="more-projects-title">
        Latest Projects
      </h2>

      <div className="carousel-wrapper">

        <div className="carousel-arrows">

          <button className="swiper-button-prev-custom">
            <IoChevronBack />
          </button>

          <button className="swiper-button-next-custom">
            <IoChevronForward />
          </button>

        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}

          breakpoints={{
            0: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            }
          }}

          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
        >

          {projects.map((p) => (

            <SwiperSlide key={p.id}>

              <div className="carousel-card">

                <img src={p.image} alt={p.title} />

                <h4>{p.title}</h4>

                <Link to={`/project/${p.id}`} className="open-project">
                  View Project
                </Link>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

};

export default ProjectDetails;