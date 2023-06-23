import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Checkbox,
  Stack,
  Container,
  Title,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";

export function Register() {
  const [formData, setFromData] = useState({
    email: "",
    name: "",
    password: "",
    terms: false,
  });
  const [formErrors, setFromErrors] = useState({
    email: "",
    name: "",
    password: "",
    terms: true,
  });

  function handleChange(event) {
    let { name, value } = event.target;

    setFromData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <Container size={420} my={60}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome to MERA! Register
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Link to={"/Login"} size="sm">
          Login
        </Link>
      </Text>

      <Paper mt={30} radius="md" p="xl" withBorder>
        <form>
          <Stack>
            <TextInput
              name="name"
              label="Name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              radius="md"
            />

            <TextInput
              type="email"
              name="email"
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email && "Invalid email"}
              radius="md"
            />
            <PasswordInput
              name="password"
              required
              label="Password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              error={formErrors.password && "Password should include at least 6 characters"}
              radius="md"
            />
            <Checkbox
              name="terms"
              label="I accept terms and conditions"
              checked={formData.terms}
              onChange={() => {
                setFromData((prev) => {
                  return { ...prev, terms: !formData.terms };
                });
              }}
            />
            <Button disabled={!formData.terms} fullWidth mt="xl">
              Register
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
