import React, {Component} from "react"
import Notifications from "./Notifications"
import ProjectList from "../project/ProjectList"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import {Redirect } from "react-router-dom"


class Dashboard extends Component {
    render () {
      
        const {projects, auth, notifications }= this.props
      
        if (!auth.uid) return <Redirect to ="/signin"></Redirect>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}></ProjectList>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications = {notifications}></Notifications>
                    </div>
                </div>
            </div>
        )
    }

    
}

const mapStateToProps = (state) => {
   
    return {
        auth : state.firebase.auth,
        notifications : state.firestore.ordered.notifications,
        projects : state.firestore.ordered.projects
    }
}


export default compose(
    firestoreConnect([
        {collection :"projects",  orderBy: ["createdAt", "desc"]},
        {collection : "notifications", limit: 3, orderBy: ["time", "desc"]}
    ]),
    connect(mapStateToProps)
    )(Dashboard)



