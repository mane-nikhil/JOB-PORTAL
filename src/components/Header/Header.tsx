import { Indicator } from "@mantine/core";
import { Briefcase } from "tabler-icons-react";
import { Bell } from "tabler-icons-react";
import { Settings } from "tabler-icons-react";
import NavLinks from "./NavLink";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/signup" || location.pathname === "/login")
    return null; // Avoid rendering Header on signup page

  return (
    <>
      <div className="w-full bg-mine-shaft-950 text-white h-20 flex justify-between items-center">
        <div className="flex gap-1 items-center text-bright-sun-400  font-['poppins']">
          <Briefcase className="h-8  w-10 strokes={2}" />
          <div className="text-3xl font-semibold">Naukari</div>
        </div>

        <NavLinks />
        <div className="flex gap-3 items-center">
          <ProfileMenu />
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Settings />
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color="brightSun.4" size={8} offset={5} processing>
              <Bell />
            </Indicator>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
