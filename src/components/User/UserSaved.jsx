import { useState } from "react";
import { Tabs, Box, Text } from "@mantine/core";

export default function UserSaved() {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <Tabs
      sx={{
        "& .mantine-Tabs-tabsList": {
          border: "none !important",
          justifyContent: "center",
        },
        "& .mantine-Tabs-panel": {
          minHeight: "0 !important",
        },
      }}
      value={activeTab}
      onTabChange={setActiveTab}
    >
      <Tabs.List>
        <Tabs.Tab value="first">Created</Tabs.Tab>
        <Tabs.Tab value="second">Saved</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">
        <UserSavedWrapper />
      </Tabs.Panel>
      <Tabs.Panel value="second">
        <UserSavedWrapper />
      </Tabs.Panel>
    </Tabs>
  );
}

function UserSavedWrapper({ data }) {
  return (
    <Box
      sx={{
        minHeight: "250px",
      }}
    >
      {data === undefined ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "250px",
          }}
        >
          <Text size={"lg"} c="dimmed">
            No Items
          </Text>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}
