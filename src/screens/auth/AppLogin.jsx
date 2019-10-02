import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import Joi from "joi-browser"

import authService from "./../../utils/services/auth-service"
import { fetchCurrentUser } from "../../redux/actions/userAction"

import LoginForm from "../../components/common/LoginForm"
import BaseInput from "./../../components/common/Input"

class Login extends LoginForm {
  state = {
    data: {
      email: "",
      password: ""
    },

    toDashboard: false,

    errors: []
  }

  schema = {
    email: Joi.string()
      .trim()
      .required()
      .email(),
    password: Joi.string()
      .trim()
      .required()
  }

  render() {
    const { data, errors } = this.state

    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />
    }

    return (
      <div className="content">
        <p>Please log in</p>
        <form onSubmit={this.handleSubmit}>
          <BaseInput
            name="email"
            value={data.email}
            onChange={this.handleChange}
            label="Email"
            autoComplete="email"
            placeholder="Email"
            error={errors.email}
          >
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </BaseInput>

          <BaseInput
            name="password"
            value={data.password}
            onChange={this.handleChange}
            label="Password"
            autoComplete="password"
            placeholder="Password"
            error={errors.email}
            type="password"
          >
            <small id="passwordHelp" className="form-text text-muted">
              Please use secure password.
            </small>
          </BaseInput>

          <div>{this.renderButton("Login")}</div>
        </form>
      </div>
    )
  }

  doSubmit = () => {
    try {
      authService
        .login(this.state.data)
        .then(() => this.props.fetchCurrentUser())
        .then(() => this.setState(() => ({ toDashboard: true })))
    } catch (e) {
      const newError = e.response.data

      const errors = { ...this.state.errors, email: newError }

      this.setState({ errors })
    }
  }
}

export default connect(
  null,
  { fetchCurrentUser }
)(Login)
