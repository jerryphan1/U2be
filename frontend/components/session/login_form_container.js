import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';

const mSTP = (state) => ({
    errors: state.errors.sessionErrors,
    formType: 'login'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);