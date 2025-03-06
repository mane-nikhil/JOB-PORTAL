import { Menu, Avatar, Switch } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Logout,
  MessageCircle,
  Moon,
  MoonStars,
  Sun,
  UserCircle,
} from "tabler-icons-react";

const ProfileMenu = () => {
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      width={200}
      opened={opened}
      onChange={setOpened}
      closeOnItemClick={false} // Prevents closing on menu item click
    >
      <Menu.Target>
        <div className="flex gap-2 items-center cursor-pointer">
          <div>Marshal</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to={"/profile"}>
          <Menu.Item leftSection={<UserCircle size={14} />}>Profile</Menu.Item>
        </Link>
        <Menu.Item leftSection={<MessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<FileText size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<Moon size={14} />}
          rightSection={
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              size="md"
              color="dark.4"
              onLabel={<Sun size={16} color="yellow" />}
              offLabel={<MoonStars size={16} color="cyan" />}
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item color="red" leftSection={<Logout size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default ProfileMenu;
