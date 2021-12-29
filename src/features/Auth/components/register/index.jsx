import React from "react";
import PropTypes from "prop-types";

import register from "../../userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import RegisterForm from "./form";
Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log("Form Submit:", values);
    try {
      values.username = values.email;

      // dispatch register action
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("New user: ", user);
    } catch (error) {
      console.log("Failed to register: ", error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
