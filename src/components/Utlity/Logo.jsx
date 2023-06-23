import { Anchor } from "@mantine/core";

export default function Logo() {
  return (
    <Anchor
      sx={{
        fontSize: "40px",
      }}
      underline={false}
      href="/"
    >
      MERA
    </Anchor>
  );
}
