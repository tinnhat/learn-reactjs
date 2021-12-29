import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "./components/register/form";
import register from "features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (value) => {
    console.log(value);
    try {
      //auto set username = email (do api quy dinh)
      value.username = value.email;
      const action = register(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("new user", user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
