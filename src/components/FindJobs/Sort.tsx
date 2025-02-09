import { useState } from "react";
import { Combobox, useCombobox } from "@mantine/core";
import { Adjustments } from "tabler-icons-react";

const opt = [
  "Relevance",
  "Most Recent",
  "Salary (low to hight)",
  "Salary (high to low)",
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className="text-xs" value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div
            onClick={() => combobox.toggleDropdown()}
            className="cursor-pointer gap-2 text-sm border border-bright-sun-400 flex px-2 py-1 rounded-xl items-center"
          >
            {selectedItem}{" "}
            <Adjustments className="h-5 w-5 text-bright-sun-400 flex" />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
};

export default Sort;
