import { RangeSlider } from "@mantine/core";
import dropDownData from "../../Data/Jobsdata";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
  const [value, setvalue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex gap-2 py-2 px-2">
      {dropDownData.map((item, index) => (
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
