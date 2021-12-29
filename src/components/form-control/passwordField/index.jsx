import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div>
      <Controller
        control={control}
        name={name}
        disabled={disabled}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { invalid, error },
        }) => (
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={onChange}
            onBlur={onBlur}
            error={invalid}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              {label}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label={label}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              disabled={disabled}
            />
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
}

export default PasswordField;
