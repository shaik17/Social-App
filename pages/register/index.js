import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";


function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div class="container register_wrapper">
      <h3 className="regsiter_heading mb-4 text-center">Register</h3>
        <div className="row text-center">
          <div className="col-md-4 col-lg-4 m-auto">
              <form
              className="mt-2"
              onSubmit={handleSubmit(submit)}
              method="post"
            >
              <div className="">
                <TextField
                  label="Name"
                  helperText={errors.name ? "Name field is required" : ""}
                  type="text"
                  fullWidth
                  error={errors.name}
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              <div className="mt-4 mb-4">
                <TextField
                  label="Email"
                  helperText={
                    errors.email
                      ? "Email field is required"
                      : "Do not share your Email with anyone"
                  }
                  type="text"
                  fullWidth
                  error={errors.email}
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
              <div className="mt-4 mb-4">
                <TextField
                  label="Password"
                  helperText={
                    errors.password
                      ? "Password field is required"
                      : "Do not share your Password with anyone"
                  }
                  type="password"
                  fullWidth
                  error={errors.password}
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
