import { IconHeart, IconUserPlus, IconJewishStarFilled } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from "@mantine/core";

let data = {
  image: "gallery/3.jpg",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    {
      emoji: "☀️",
      label: "Sunny weather",
    },
    {
      emoji: "🦓",
      label: "Onsite zoo",
    },
    {
      emoji: "🌊",
      label: "Sea",
    },
    {
      emoji: "🌲",
      label: "Nature",
    },
    {
      emoji: "🤽",
      label: "Water sports",
    },
  ],
};

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },

  like: {
    color: theme.colors.blue[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export function PostCard({ image, title, author, description }) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm">{author}</Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              $168.00
            </Text>
          </div>
          <Button radius="xl" style={{ flex: 1 }}>
            Buy
          </Button>
        </Group>
      </Card.Section>

      <Group
        mt="xs"
        grow
        sx={{
          justifyContent: "center",
        }}
      >
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconUserPlus size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>{" "}
        <ActionIcon variant="default" radius="md" size={36}>
          <IconJewishStarFilled size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
