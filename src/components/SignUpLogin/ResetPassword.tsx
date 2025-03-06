import {
  Button,
  Modal,
  PasswordInput,
  PinInput,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { At, Lock } from "tabler-icons-react";
import { changePassword, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [resendLoader, setResendLoader] = useState(false);
  const [seconds, setSeconds] = useState(60);

  const interval = useInterval(() => {
    if (seconds === 0) {
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    } else setSeconds((s) => s - 1);
  }, 1000);

  const handleSendOtp = () => {
    setOtpSending(true);
    sendOtp(email)
      .then((res) => {
        console.log(res);
        successNotification("OTP sent successfully", "Enter OTP to reset.");
        setOtpSent(true);
        setOtpSending(false);
        setResendLoader(true);
        interval.start();
      })
      .catch((err) => {
        console.log(err);
        errorNotification("OTP sending Failed", err.response.data.errorMessage);
        setOtpSending(false);
      });
  };

  const handleVerifyOtp = (otp: string) => {
    verifyOtp(email, otp)
      .then((res) => {
        console.log(res);
        successNotification("OTP Verified", "Enter new Password");
        setVerified(true);
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "OTP Verification Failed",
          err.response.data.errorMessage
        );
      });
  };

  const resendOtp = () => {
    if (resendLoader) return;
    handleSendOtp();
    // setOtpSending(true);
  };

  const changeEmail = () => {
    setOtpSent(false);
    setResendLoader(false);
    setSeconds(60);
    setVerified(false);
    interval.stop();
  };

  const handleResetPassword = () => {
    changePassword(email, password)
      .then((res) => {
        console.log(res);
        successNotification("Password Changed", "Login With New Password");
        props.close();
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "Password Reset Failed",
          err.response.data.errorMessage
        );
      });
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div className="flex flex-col gap-6">
        <TextInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          size="md"
          value={email}
          leftSection={<At size={16} />}
          rightSection={
            <Button
              loading={otpSending && !otpSent}
              size="xs"
              className="mr-1"
              onClick={handleSendOtp}
              autoContrast
              variant="filled"
              disabled={email === "" || otpSent}
            >
              Login
            </Button>
          }
          rightSectionWidth="xl"
          label="Your email"
          placeholder="Your email"
          withAsterisk
        />
        {otpSent && (
          <PinInput
            length={6}
            className="mx-auto"
            type={"number"}
            size="md"
            gap={"lg"}
            onComplete={handleVerifyOtp}
          />
        )}
        {otpSent && !verified && (
          <div className="flex gap-2 ">
            <Button
              fullWidth
              color="brightSun.4"
              loading={otpSending}
              onClick={resendOtp}
              autoContrast
              variant="light"
            >
              {resendLoader ? seconds : "Resend"}
            </Button>
            <Button
              fullWidth
              loading={otpSending}
              onClick={changeEmail}
              autoContrast
              variant="filled"
            >
              Change Email
            </Button>
          </div>
        )}
        {verified && (
          <PasswordInput
            onChange={(e) => {
              setPassword(e.target.value);
              setPassErr(signupValidation("password", e.target.value));
            }}
            name="password"
            error={passErr}
            value={password}
            leftSection={<Lock size={16} />}
            label="password"
            placeholder="password"
            withAsterisk
          />
        )}
        {verified && (
          <Button onClick={handleResetPassword} autoContrast variant="filled">
            Change Password
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
