import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="title-card">
        <h1>{courseTitle}</h1>
        <div className="horizontal">
          <AiFillClockCircle />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="horizontal">
        {tagsList.map(each => (
          <p className="tag-para" key={each.id}>
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
