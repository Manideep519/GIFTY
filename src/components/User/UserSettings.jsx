import { Box, Input, PasswordInput, Text, Container, Stack, Button } from "@mantine/core";

export default function UserSettings() {
  return (
    <Box>
      <Container size={"xl"}>
        <Box
          sx={{
            display: "flex",
            margin: "30px auto",
            flexDirection: "column",
            maxWidth: "420px",
          }}
        >
          <Text mb="lg" size={"xl"}>
            Update profile
          </Text>
          <Stack>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <PasswordInput placeholder="Old password" id="old-password" />
            <PasswordInput placeholder="New password" id="old-password" />
            <PasswordInput placeholder="Confirm new password" id="old-password" />
            <Button>Update</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
