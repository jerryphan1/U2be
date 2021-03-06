import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = (state, ownProps) => ({
    errors: state.errors.sessionErrors,
    formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);