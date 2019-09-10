import React, { Component } from 'react';
import SkillDelete from './SkillDelete';
import SkillEdit from './SkillEdit';

class SkillCard extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="skill-card">
                    <h3>{this.props.skill.name}</h3>
                    <p>Description: {this.props.skill.description}</p>
                    <SkillEdit {...this.props} editSkill={this.props.editSkill} />{' '}
                    <SkillDelete {...this.props} deleteSkill={this.props.deleteSkill} />
                </div>
            </React.Fragment>
        )
    }
}

export default SkillCard;


// import React, { Component } from "react";
// import EventEditModal from "./EventEditModal";
// import { Button } from "reactstrap";
// import "./Events.css";

// class EventCard extends Component {
//     render() {
//         return (
//             <div className="eventCard">
//                 <div className="eventCardContent">
//                     <h3>Name: {this.props.event.eventName}</h3>
//                     <p>Location:{this.props.event.eventLocation}</p>
//                     <p>Date: {this.props.event.date}</p>
//                     <EventEditModal
//                         {...this.props}
//                         postEditedEvent={this.props.postEditedEvent}
//                     />
//                     <Button onClick={() => this.props.deleteEvent(this.props.event.id)}>
//                         Delete
//           </Button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default EventCard;