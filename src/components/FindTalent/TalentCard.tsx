import { Heart, MapPin } from "tabler-icons-react";
import { Avatar, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface TalentCardProps {
  name: string;
  role: string;
  company: string;
  topSkills: string[];
  about: string;
  expectedCtc: string;
  location: string;
}

const TalentCard: React.FC<TalentCardProps> = (props) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-65 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 rounded-xl w-96 ease-in-out transition duration-300 ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src="/avatar.png" alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <Heart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        {props.topSkills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
      <Text className="text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {props.about}
      </Text>
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          {props.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
          <MapPin className="h-5 w-5" />
          {props.location}
        </div>
      </div>
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        <Link to="/talent-profile">
          <Button color="brightSun.4" variant="outline" fullWidth>
            Profile
          </Button>
        </Link>
        <div>
          <Button color="brightSun.4" variant="light" fullWidth>
            Messege
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
