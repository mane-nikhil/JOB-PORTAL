/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { Bookmark } from "tabler-icons-react";
import DOMPurify from "dompurify";
import { card, desc, skills } from "../../Data/JobDescData";

const JobDesc = () => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src="/Companies/Dell.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">Software engineer</div>
            <div className="text-lg text-mine-shaft-300">
              google&bull;3 days ago &bull; 48 applicant
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to={"/apply-job"}>
            <Button color="brightSun.4" variant="light" size="sm">
              Apply
            </Button>
          </Link>
        </div>
        <Bookmark className="text-bright-sun-400 cursor-pointer" />
      </div>
      <Divider my="xl" />

      <div className="flex justify-between">
        {card.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              className="!h-12 !w-12 "
              variant="light"
              aria-label="Settings"
              radius="xl"
              color="brightSun.4"
            >
              <item.icon className="h-4/5 w-4/5 " />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2 !text-sm">
          {skills.map((item, index) => (
            <ActionIcon
              key={index}
              className="!h-fit !w-fit font-medium"
              variant="light"
              aria-label="Settings"
              radius="xl"
              color="brightSun.4"
              p="xs"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      {/* install dom purify to protect attack */}
      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_li]:marker:text-bright-sun-400"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-8" src="/Companies/Dell.jpg" alt="" />
            </div>
            <div className="flex flex-col ">
              <div className="font-medium text-lg">google</div>
              <div className=" text-mine-shaft-300">10k+ employees</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Link to={"/company"}>
              <Button color="brightSun.4" variant="light" size="sm">
                Company page
              </Button>
            </Link>
          </div>
        </div>
        <div className="justify-between mt-2 text-mine-shaft-300 text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe sed
          cumque assumenda eveniet facilis fugiat autem eius dolores cupiditate
          quidem. Numquam accusantium deserunt, dolores ipsum culpa veritatis
          praesentium in natus recusandae consequuntur, nemo omnis eos sint
          fugiat amet eligendi mollitia.
        </div>
      </div>
    </div>
  );
};
export default JobDesc;
