import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import Masonry from "react-masonry-css";

import './projects.scss';

import projects from "./projects.json";
import Title from "../../components/title/title";
import ProjectBox from '../../components/projectBox/projectBox';
import ProjectModal from "../../components/projectBox/projectModal";

type project = {
  id: string,
  preview: string,
  title: string,
  description: string,
  tag: Array<string>,
  path: string,
  imgs: Array<string>,
}

export default function Projects() {
  const [isProjectOnClick, setIsProjectOnClick] = useState(false);
  const [currentViewProject, setCurentViewProject] = useState<{
    id: string, 
    preview: string, 
    title: string, 
    description: string,
    tag: Array<string>, 
    path: string, 
    imgs: Array<string>
  }>({id: "", preview: "", title: "", description: "", tag: [""], path: "", imgs: [""]});
  
  const [filterResult, setFilterResult] = useState(projects);
  const [pickedFilter, setPickedFilter] = useState("all");
  const [isFilterMenuActive, setFilterMenuActive] = useState(false);
  const [pickedFilterDropdown, setPickedFilterDropdown] = useState("NEWEST");
  const projectsBreakpoints = {
    default: 3,
    900: 2,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    let projectsArr = [...projects];
    let result;

    if (pickedFilter !== "all") {
      result = projectsArr.filter((project) => project.tag.includes(pickedFilter));
    } else {
      result = projectsArr;
    }

    if (pickedFilterDropdown === "NEWEST")
      result = result.sort((a, b) => (a.id > b.id ? 1 : -1));
    else
      result = result.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    setFilterResult(result);
  }, [pickedFilter, pickedFilterDropdown]);

  let closeModal = () => {
    setIsProjectOnClick(false);
  };

  let showSuccessModal = (project: project) => {
    setCurentViewProject(project);
    setIsProjectOnClick(true);
  };

  return (
    <div id="projects" className='section-wrapper main-color-background'>
      {isProjectOnClick && currentViewProject &&
        <ProjectModal project={currentViewProject} closeModal={closeModal} onKeyDown={closeModal} />
      }
      <div className="wrapper">
        <Title title="PROJECTS SHOWCASE." />
        <Row>
          <Col xs={12} sm={12} md={8} lg={9}>
            <div className="projects__nav">
              <ul>
                <li className={pickedFilter === "all" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("all")}>
                  ALL
                </li>
                <li
                  className={pickedFilter === "robotics" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("robotics")}
                >
                  ROBOTICS
                </li>
                <li
                  className={pickedFilter === "ai/ml" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("ai/ml")}
                >
                  AI/ML
                </li>
                <li className={pickedFilter === "webMobile" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("webMobile")}>
                  WEB & MOBILE APP
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3}>
            <div className="projects__filter" onMouseEnter={() => setFilterMenuActive(true)} onMouseLeave={() => setFilterMenuActive(false)}>
              <p className="font12">{pickedFilterDropdown} FIRST</p>
              <img src="/assets/projects/arrow.svg" alt="arrow" />
              {isFilterMenuActive && (<div className="portfolio__filter-menu shadow">
                <p className="font12" onClick={() => setPickedFilterDropdown("NEWEST")}>
                  NEWEST
                </p>
                <p className="font12" onClick={() => setPickedFilterDropdown("OLDEST")}>
                  OLDEST
                </p>
              </div>)}
            </div>
          </Col>
        </Row>
        <Masonry breakpointCols={projectsBreakpoints} className="my-masonry-grid" columnClassName="gallery">
          {filterResult.map((project) => (
            <ProjectBox key={project.id} project={project} onClick={() => showSuccessModal(project)}/>
          ))}
        </Masonry>
      </div>
    </div>
  )
}
