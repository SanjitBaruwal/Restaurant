// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
  collapse,
} from "@material-tailwind/react";

import * as Yup from "yup";
import { useFormik } from "formik";

import { useState } from "react";

export function LoginForm() {
  const [hidePassword, setHidePassword] = useState(true);

  const loginSchema = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: loginSchema,
  });
  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <Card
        shadow
        className="md:px-24 md:py-14 py-8 border border-gray-300 xs:w-full lg:w-1/2 bg-[#EDFFF5]"
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="text-center flex flex-col items-center bg-[#EDFFF5]"
        >
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            <span className="text-[#018343]">mindrisers</span> Restaurents
          </Typography>
          <Typography className="!text-gray-600 text-[16px] font-normal md:max-w-sm text-center ">
            Experience Unforgettable Dining: A Journey Through Flavors and
            Passion in Every Bite
          </Typography>
        </CardHeader>
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-20 text-black w-full m-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl text-center"
          >
            <span className="text-[#018343] ">Login</span>
          </Typography>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 md:mt-8"
          >
            <div className="w-full">
              <Input
                type="email"
                label="email or username"
                name="email"
                value={formik.values.email}
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div className="w-full">
              <Input
                type={hidePassword ? "password" : "text"}
                name="password"
                value={formik.values.password}
                onChange={(e) => {
                  formik.setFieldValue("password", e.target.value);
                }}
                label="Password"
                icon={
                  hidePassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 cursor-pointer"
                      onClick={() => setHidePassword(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 cursor-pointer"
                      onClick={() => setHidePassword(true)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )
                }
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-500">{formik.errors.password}</p>
              )}
            </div>
            <Button size="lg" color="gray" fullWidth type="submit">
              Sign In
            </Button>

            <Typography
              variant="small"
              className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
            >
              Upon signing in, you consent to abide by our{" "}
              <a href="#" className="text-gray-900">
                Terms of Service
              </a>{" "}
              &{" "}
              <a href="#" className="text-gray-900">
                Privacy Policy.
              </a>
            </Typography>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoginForm;
