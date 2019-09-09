import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SkillModal from './SkillModal';
import SkillDataManager from './SkillDataManager';

class SkillList extends Component {

    render() {
        return (
            <React.Fragment>
                <SkillModal {...this.props} />
                <div className="skills-container">
                    <h3>SkillCards</h3>
                </div>
            </React.Fragment>
        )
    }

}

export default SkillList



// import React, { Component } from "react";
// //import the components we will need
// import EventCard from "./EventCard";
// import EventDataManager from "./EventDataManager";
// //import { Button } from 'reactstrap';
// import EventNewModal from "./EventNewModal";
// import FriendDataManager from "../friends/FriendDataManager";
// import EventFriend from "./EventFriend";
// import "./Events.css";

// class EventList extends Component {
//     state = {
//         userId: parseInt(sessionStorage.getItem("credentials")),
//         events: [],
//         connections: []
//     };

//     componentDidMount() {
//         EventDataManager.getAllEvents(this.state.userId).then(events => {
//             FriendDataManager.getConnections().then(connections => {
//                 const userConnections = connections.filter(connection => {
//                     if (
//                         this.state.userId === connection.userId ||
//                         this.state.userId === connection.friendId
//                     ) {
//                         return connection;
//                     }
//                 });

//                 this.setState({ connections: userConnections, events: events });
//             });
//         });

//         console.log("componentDidMount", this.state);
//     }

//     // use fat arrow
//     addEvent = eventObject => {
//         return EventDataManager.postEvent(eventObject).then(() => {
//             EventDataManager.getAllEvents(this.state.userId).then(events => {
//                 FriendDataManager.getConnections().then(connections => {
//                     const userConnections = connections.filter(connection => {
//                         if (
//                             this.state.userId === connection.userId ||
//                             this.state.userId === connection.friendId
//                         ) {
//                             return connection;
//                         }
//                     });

//                     this.setState({ connections: userConnections, events: events });
//                 });
//             });
//         });
//     };

//     deleteEvent = id => {
//         EventDataManager.deleteEvent(id).then(() => {
//             EventDataManager.getAllEvents(this.state.userId).then(events => {
//                 FriendDataManager.getConnections().then(connections => {
//                     const userConnections = connections.filter(connection => {
//                         if (
//                             this.state.userId === connection.userId ||
//                             this.state.userId === connection.friendId
//                         ) {
//                             return connection;
//                         }
//                     });

//                     this.setState({ connections: userConnections, events: events });
//                 });
//             });
//         });
//     };

//     postEditedEvent = id => {
//         return EventDataManager.editEvent(id).then(() => {
//             EventDataManager.getAllEvents(this.state.userId).then(events => {
//                 FriendDataManager.getConnections().then(connections => {
//                     const userConnections = connections.filter(connection => {
//                         if (
//                             this.state.userId === connection.userId ||
//                             this.state.userId === connection.friendId
//                         ) {
//                             return connection;
//                         }
//                     });

//                     this.setState({ connections: userConnections, events: events });
//                 });
//             });
//         });
//     };

//     render() {
//         console.log(this.state);
//         return (
//             <React.Fragment>
//                 <EventNewModal {...this.props} addEvent={this.addEvent} />
//                 <div className="eventContainerCards">
//                     {this.state.events.map(event => (
//                         <EventCard
//                             key={event.id}
//                             event={event}
//                             deleteEvent={this.deleteEvent}
//                             postEditedEvent={this.postEditedEvent}
//                             {...this.props}
//                         />
//                     ))}
//                     {this.state.connections.map(connection => (
//                         <EventFriend
//                             key={connection.id}
//                             connection={connection}
//                             {...this.props}
//                         />
//                     ))}
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// export default EventList;