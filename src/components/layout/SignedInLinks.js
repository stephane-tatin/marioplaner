import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import {signOut} from "../../store/actions/authActions"


const SignedInLink = (props) => {
    return (
    <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li onClick={props.signOut}>Log Out</li>
        <li><NavLink to="/" className="btn btn-floating pink ligthen-1">{props.profile.initials}</NavLink></li>
    </ul>
    
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLink)