import {Component} from 'react'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)

    return (
      <div className="bg-container">
        <h1>MY JOURNEY OF CCBP 4.0</h1>

        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING" slideShow>
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachItem.id}
                  courseDetails={eachItem}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachItem.id}
                projectDetails={eachItem}
              />
            )
          })}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
