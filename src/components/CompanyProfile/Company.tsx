import { Avatar, Divider, Tabs } from "@mantine/core";
import { MapPin } from "tabler-icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img
          style={{ height: "200px" }} // Custom height equivalent to h-25
          className="rounded-t-2xl w-full "
          src="/banner.png"
          alt=""
        />
        <img
          className="w-36 h-36 rounded-3xl -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8 bg-mine-shaft-950 p-2 left-5"
          src="/Icons/Google.png"
          alt=""
        />
      </div>
      <div className="pt-16 px-3 ">
        <div className="text-left text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>

        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <MapPin className="h-5 w-5" />
          New York
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Tabs variant="outline" defaultValue="about" radius="lg">
          <Tabs.List className="[&_button]:text-xl font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <AboutComp />
          </Tabs.Panel>
          <Tabs.Panel value="jobs">
            <CompanyJobs />
          </Tabs.Panel>
          <Tabs.Panel value="employees">
            <CompanyEmployees />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default Company;
