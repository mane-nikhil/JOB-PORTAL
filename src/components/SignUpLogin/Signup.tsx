/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { At, Check, Lock, X } from "tabler-icons-react";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};
const Signup = () => {
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });
    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "Password do not match";
      setFormError({
        ...formError,
        [name]: signupValidation(name, value),
        confirmPassword: err,
      });
    }
    if (name === "confirmPassword") {
      if (data.password !== value)
        setFormError({ ...formError, [name]: "passwords do not match" });
      else setFormError({ ...formError, confirmPassword: "" });
    }
  };

  const handleSubmit = () => {
    let valid = true;
    const newFormError: { [key: string]: string } = {};
    for (const key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = signupValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "password do not match";
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);

    if (valid == true) {
      registerUser(data)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Registered Successfully",
            message: "Redirecting to login page ...",
            withCloseButton: true,
            icon: <Check style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
          notifications.show({
            title: "Registration Failed",
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
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <div className="px-10 space-y-3">
        <TextInput
          error={formError.name}
          onChange={handleChange}
          name="name"
          value={data.name}
          label="Full Name"
          placeholder="Your name"
          withAsterisk
        />
        <TextInput
          error={formError.email}
          onChange={handleChange}
          name="email"
          value={data.email}
          leftSection={<At size={16} />}
          label="Your email"
          placeholder="Your email"
          withAsterisk
        />
        <PasswordInput
          error={formError.password}
          onChange={handleChange}
          name="password"
          value={data.password}
          leftSection={<Lock size={18} />}
          label="password"
          placeholder="password"
          withAsterisk
        />
        <PasswordInput
          error={formError.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          value={data.confirmPassword}
          leftSection={<Lock size={18} />}
          label="Confirn password"
          placeholder="confirm password"
          withAsterisk
        />
        <Radio.Group
          onChange={handleChange}
          value={data.accountType}
          label="You are?"
          withAsterisk
        >
          <Group mt="xs">
            <Radio autoContrast value="APPLICANT" label="Applicant" />
            <Radio autoContrast value="EMPLOYER" label="Employer" />
          </Group>
        </Radio.Group>
        <Checkbox
          autoContrast
          label={
            <>
              I Accept <Anchor>terms and condition</Anchor>
            </>
          }
        />
        <Button onClick={handleSubmit} autoContrast variant="filled" fullWidth>
          Sign Up
        </Button>
        <div className="mx-auto">
          Have An Account ?
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/login");
              setFormError(form);
              setData(form);
            }}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};
export default Signup;
