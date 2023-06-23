import { Tabs } from "@mantine/core";

export default function UserActivity() {
  return (
    <>
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery">Liked</Tabs.Tab>
          <Tabs.Tab value="messages">Comments</Tabs.Tab>
          <Tabs.Tab value="settings">Following</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          Liked Posts tab content
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          Comments tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Following tab content
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
