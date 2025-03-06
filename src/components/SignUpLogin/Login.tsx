/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { At, Check, Lock, X } from "tabler-icons-react";
import { loginUser } from "../../Services/UserService";
import { useState } from "react";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
const form = {
  email: "",
  password: "",
};
const Login = () => {
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    // setFormError({ ...formError, [event.target.name]: event.target.value });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let valid = true;
    const newFormError: { [key: string]: string } = {};
    for (const key in data) {
      newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if (valid) {
      loginUser(data)
        .then((res) => {
          console.log(res);
          notifications.show({
            title: "Login Successful",
            message: "Redirecting to home page ...",
            withCloseButton: true,
            icon: <Check style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            navigate("/");
          }, 4000);
        })
        .catch((err) => {
          console.log(err.response.data);
          notifications.show({
            title: "Login Failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <X style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };
  return (
    <>
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <div className="px-10 space-y-3">
          <TextInput
            onChange={handleChange}
            name="email"
            error={formError.email}
            value={data.email}
            leftSection={<At size={16} />}
            label="Your email"
            placeholder="Your email"
            withAsterisk
          />
          <PasswordInput
            onChange={handleChange}
            name="password"
            error={formError.password}
            value={data.password}
            leftSection={<Lock size={18} />}
            label="password"
            placeholder="password"
            withAsterisk
          />

          <Button
            onClick={handleSubmit}
            autoContrast
            variant="filled"
            fullWidth
          >
            Login
          </Button>
          <div className="mx-auto">
            Have don't have An Account ?
            <span
              className="text-bright-sun-400 hover:underline cursor-pointer"
              onClick={() => {
                navigate("/signup");
                setFormError(form);
                setData(form);
              }}
            >
              SignUp
            </span>
          </div>
        </div>
        <div
          onClick={open}
          className="text-bright-sun-400 hover:underline cursor-pointer text-center"
        >
          Forget Password ?
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};
export default Login;
