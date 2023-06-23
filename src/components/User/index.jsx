import { useState } from "react";
import { Box, Container, Tabs } from "@mantine/core";
import UserProfile from "./UserProfile";
import UserSaved from "./UserSaved";
import UserSettings from "./UserSettings";

export default function User() {
  const [activeTab, setActiveTab] = useState("userProfile");
  return (
    <Box>
      <Container size={"xl"}>
        <Tabs
          value={activeTab}
          onTabChange={setActiveTab}
          defaultValue="userProfile"
          orientation="vertical"
          sx={{
            "& .mantine-Tabs-tab": {
              padding: "16px 10px",
            },
            "& .mantine-Tabs-panel": {
              minHeight: "500px",
            },
          }}
          radius={"md"}
        >
          <Tabs.List>
            <Tabs.Tab value="userProfile">Profile</Tabs.Tab>
            <Tabs.Tab value="userActivity">User Activity</Tabs.Tab>

            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="userProfile">
            <UserProfile />
            <UserSaved />
          </Tabs.Panel>
          <Tabs.Panel value="userActivity">User Activity tab content sadsad sdsadsddsad</Tabs.Panel>
          <Tabs.Panel value="settings">
            <UserSettings />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
}
