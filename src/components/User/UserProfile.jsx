import { Avatar, Text, Button, Group, Paper, Box } from "@mantine/core";

const data = {
  avatar: "",
  name: "Manideep Yadav",
  email: "manideep@me.io",
  job: "Developer",
};

export default function UserProfile() {
  return (
    <Box
      sx={{
        margin: "30px auto",
        maxWidth: "500px",
      }}
    >
      <Paper
        sx={{
          padding: "30px 0",
        }}
      >
        <Avatar src={data.avatar} size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" weight={500} mt="md">
          {data.name}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {data.email} • {data.job}
        </Text>
        <Group position="center">
          <Button variant="default" mt="md">
            Share
          </Button>
          <Button variant="default" mt="md">
            Edit profile
          </Button>
          <Button variant="default" mt="md">
            Send message
          </Button>
        </Group>
      </Paper>
    </Box>
  );
}
