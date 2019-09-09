import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './auth/Auth';

class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("activeUser") !== null
    
    render() {
        return (
            <React.Fragment>
                
                <Route exact path="/" render={props => {
                    return <Auth {...props} />;
                }} />

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