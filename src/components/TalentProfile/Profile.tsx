/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider } from "@mantine/core";
import { Briefcase, MapPin } from "tabler-icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

// Define types for Profile props
// interface Experience {
//   title: string;
//   company: string;
//   location: string;
//   startDate: string;
//   endDate: string;
//   description: string;
// }

// interface ProfileProps {
//   name: string;
//   role: string;
//   company: string;
//   location: string;
//   about: string;
//   skills: string[];
//   experience: Experience[];
// }
// const Profile: React.FC<ProfileProps> = (props) => {

const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          style={{ height: "200px" }} // Custom height equivalent to h-25
          className="rounded-t-2xl w-full "
          src="/banner.png"
          alt=""
        />
        <img
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
          src="/avatar.png"
          alt=""
        />
      </div>
      <div className="pt-16 px-3 ">
        <div className="text-left text-3xl font-semibold flex justify-between">
          {props.name}
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-left text-xl flex gap-1 items-center">
          <Briefcase className="h-5 w-5" />
          {props.role} &bull; {props.company}
        </div>
        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <MapPin className="h-5 w-5" />
          {props.location}
        </div>
      </div>
      <Divider my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-left">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>
      <Divider my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-left">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 text-left">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 text-left">
          Certifications
        </div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((certi: any, index: any) => (
            <CertiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
