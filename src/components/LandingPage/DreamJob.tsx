import { Avatar, TextInput } from "@mantine/core";
import { Search } from "tabler-icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find Your <span>Dream </span>
          <span>Job</span> With Us
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life Begins with a good company. Start Explore thousands of jobs
          in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
            variant="unstyled"
            label="Job Type"
            placeholder="Fulltime"
          />
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 cursor-pointer">
            <Search className="w-[85%] h-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="/City_girl_pana.png" alt=""></img>
          <div className="absolute -right-10 w-fit top-[50%] border-bright-sun-100 rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-bright-sun-300">
              10k+ got job
            </div>
            <Avatar.Group>
              <Avatar src="image.png" />
              <Avatar src="image.png" />
              <Avatar src="image.png" />
              <Avatar>+5</Avatar>
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
