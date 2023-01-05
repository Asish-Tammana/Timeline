import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="title-card">
        <h1>{projectTitle}</h1>
        <div className="horizontal">
          <AiFillCalendar />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer" className="visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
