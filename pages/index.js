import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Paper } from "@material-ui/core";

export default function Home() {
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
    <div className="container">
      <div class="login_wrapper">
        <h3 className="login_heading mb-4 text-center">Login</h3>
        <div className="row">
          <div className="col-md-4 col-lg-4 m-auto">
            <form
              className="mt-2"
              onSubmit={handleSubmit(submit)}
              method="post"
            >
              <div className="">
                <TextField
                  label="Email"
                  helperText={
                    errors.email
                      ? "Email field is required"
                      : "Do not share your email with anyone"
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
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
