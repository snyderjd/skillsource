import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './auth/Auth';
import SkillList from './skills/SkillList';
import ResourceList from './resources/ResourceList';
import SkillDataManager from './skills/SkillDataManager';

class ApplicationViews extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
    }

    isAuthenticated = () => sessionStorage.getItem("activeUserId") !== null
    
    render() {
        return (
            <React.Fragment>
                
                <Route exact path="/" render={props => {
                    return <Auth {...props} />;
                }} />

                <Route exact path="/skills" render={props => {
                    if (this.isAuthenticated()) {
                        return <SkillList {...props} />
                    }
                    return <Auth {...props} />
                }} />

                <Route exact path="/skills/:skillId(\d+)" render={props => {
                    // pass the skillId to the ResourceList component
                    if (this.isAuthenticated()) {
                        return <ResourceList skillId={parseInt(props.match.params.skillId)} {...props} /> 
                    }
                    return <Auth {...props} />

                    // const skillId = parseInt(props.match.params.skillId);
                    // let component = <Auth {...props} />

                    // SkillDataManager.checkSkillOwner(skillId, this.state.activeUserId).then(skills => {
                    //     if (skills.length > 0) {
                    //         console.log("You own this skill")
                    //         component = <ResourceList skillId={parseInt(props.match.params.skillId)} {...props} />
                    //     }
                    // }).then(() => component)
                    
                }} />

                {/* <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // pass the animalId to the AnimalDetail component
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} /> */}

            </React.Fragment>
        )
    }
}

export default ApplicationViews;



// import { Route, Redirect } from "react-router-dom";
// import React, { Component } from "react";
// import ChatMain from "./chat/ChatMain";


// export default class ApplicationViews extends Component {
//     isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
//     activeUser = () => parseInt(sessionStorage.getItem("credentials"))

//     render() {
//         return (
//             <React.Fragment>
//                 <Route exact path="/" render={props => {
//                         return <Auth {...props} />;
//                 }} />

//                 <Route path="/friends" render={props => {
//                         // Render FriendList component when user goes to '/friends'
//                         if (this.isAuthenticated()) {
//                             return <FriendMain {...props} />
//                         }
//                         return <Auth {...props} />
//                 }} />

//                 <Route path="/Chat" render={props => {
//                         return <ChatMain activeUser={this.activeUser} {...props} />;
//                 }} />

//                 <Route path="/events" render={props => {
//                         if (this.isAuthenticated()) {
//                             return <EventMain {...props} />;
//                         }
//                         return <Auth {...props} />;
//                 }} />

//                 <Route path="/tasks" render={props => {
//                         if (this.isAuthenticated()) {
//                             return <TaskMain {...props} />
//                         }
//                         return <Auth {...props} />
//                 }} />

//                 <Route path="/news" render={props => {
//                         if (this.isAuthenticated()) {
//                             return <NewsMain {...props} />;
//                         }
//                         return <Auth {...props} />;
//                 }} />
//             </React.Fragment>
//         );
//     }
// }