import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../Utlity/Logo";
import { Link } from "react-router-dom";
import { LoggedInMenu } from "./LoggedInMenu";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box>
      <Header height={60} px="md">
        <Container sx={{ height: "100%" }} size={"xl"}>
          <Group position="apart" sx={{ height: "100%" }}>
            <Logo />
            <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/gallery" className={classes.link}>
                Gallery
              </Link>
            </Group>

            <Group className={classes.hiddenMobile}>
              <Link to={"/login"}>
                <Button component="div" variant="default">
                  Login
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button component="div">Sign up</Button>
              </Link>
              <LoggedInMenu />
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
          </Group>
        </Container>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="AppName"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
          <a href="#s" className={classes.link}>
            Home
          </a>
          <a href="#s" className={classes.link}>
            About
          </a>
          <a href="#s" className={classes.link}>
            Gallery
          </a>

          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Group position="center" grow pb="xl" px="md">
            <Link to={"/login"}>
              <Button variant="default">Login</Button>
            </Link>
            <Link to={"/register"}>
              <Button>Sign up</Button>
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
