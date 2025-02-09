import { Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../../Data/TalentData";
import { UserCircle } from "tabler-icons-react";

const SearchBar = () => {
  const [value, setvalue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex gap-2 py-2 px-2 items-center !text-mine-shaft-100 flex">
      <div className="flex items-center">
        <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
          <UserCircle size={20} />
        </div>
        <Input
          className="[&_input]:!placeholder-mine-shaft-300"
          variant="unstyled"
          placeholder="Talent name"
        />
      </div>
      {searchFields.map((item, index) => (
        <div key={index} className="w-1/5">
          <MultiInput
            title={item.title}
            options={item.options}
            icon={item.icon}
          />
        </div>
        // <Divider size="xs" orientation="vertical" />
      ))}
      <div className="w-1/5">
        <div className="flex text-sm justify-between">
          <div>Salary</div>
          <div>
            &#8377;{value[0]}lpa-&#8377;{value[1]}lpa
          </div>
        </div>
        <RangeSlider
          color="brightSun.4"
          size="xs"
          value={value}
          onChange={setvalue}
        />
      </div>
    </div>
  );
};
export default SearchBar;
