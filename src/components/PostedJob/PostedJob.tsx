import { Tabs } from "@mantine/core";

const PostedJob = () => {
  return (
    <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-5 ">Jobs</div>
      <div>
        <Tabs variant="pills" defaultValue="active" autoContrast>
          <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">f</Tabs.Panel>
          <Tabs.Panel value="draft">s</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default PostedJob;
