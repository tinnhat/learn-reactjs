import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-control/InputFiedl";
import { Avatar, Button, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import PasswordField from "components/form-control/passwordField";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  avatar: {
    backgroundColor: "red",
  },
  title: {},
  submit: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
  },
}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
RegisterForm.defaultProps = {
  onSubmit: null,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .test(
        "should has at least two words",
        "please enter at least two words",
        (value) => value.split(" ").length >= 2
      ),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password too short"),
    rePass: yup
      .string()
      .required("Please retype your password")
      .oneOf([yup.ref("password")], "Password doesn't match"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      rePass: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }
    form.reset();
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h2" variant="h5" className={classes.title}>
        Create an account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="fullName" label="Full Name" />

        <InputField form={form} name="email" label="Email" />

        <PasswordField form={form} name="password" label="Password" />

        <PasswordField form={form} name="rePass" label="Retype Password" />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.submit}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
