import { ArrowLeft, Briefcase } from "tabler-icons-react";
import Signup from "../SignUpLogin/Signup";
import Login from "../SignUpLogin/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden relative">
      <Button
        className="!absolute left-5 z-10"
        my="md"
        onClick={() => navigate("/")}
        leftSection={<ArrowLeft size={20} />}
        color="brightSun.4"
        variant="light"
      >
        Home
      </Button>
      <div
        className={`w-[100vw] h-[100vh] flex transition-all ease-in-out duration-1000 [&>*]:flex-shrink-0 ${
          location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${
            location.pathname == "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          }  bg-mine-shaft-900 flex items-center justify-center flex-col gap-3`}
        >
          <div className="flex gap-1 items-center text-bright-sun-400  font-['poppins']">
            <Briefcase className="h-16  w-16 strokes={2}" />
            <div className="text-6xl font-semibold">Naukari</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find Job Made For You
          </div>
        </div>
        <Signup />
      </div>
    </div>
  );
};
export default SignUpPage;
