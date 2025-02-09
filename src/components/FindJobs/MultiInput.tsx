import { MultiSelect } from "@mantine/core";
import { IconProps } from "tabler-icons-react";

interface MultiInputProps {
  title: string;
  options: string[];
  icon: React.ComponentType<IconProps>;
}

const MultiInput: React.FC<MultiInputProps> = ({
  title,
  options,
  icon: Icon,
}) => {
  return (
    <MultiSelect
      className="gap-4"
      placeholder={`Select ${title.toLowerCase()}`}
      data={options}
      searchable
      nothingFoundMessage="Nothing found..."
      comboboxProps={{ transitionProps: { transition: "pop", duration: 200 } }}
      leftSection={<Icon size={18} className="text-gray-500" />} // Icon inside the input
      styles={{
        input: { paddingLeft: "2rem" }, // Add padding to prevent text overlap with the icon
      }}
    />
  );
};

export default MultiInput;
