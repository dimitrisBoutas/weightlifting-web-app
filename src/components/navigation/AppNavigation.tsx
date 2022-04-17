import {Center, createStyles, Group, Navbar, Tooltip, UnstyledButton} from "@mantine/core";
import {useState} from "react";
import {Gauge, Home2, Icon as TablerIcon, Logout, Settings} from "tabler-icons-react";
import {Link} from "@tanstack/react-location";
import {WeightliftingWebAppLogo} from "../../WeightliftingWebAppLogo";

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
        },
    },
}));

const navItems = [
    {icon: Home2, label: 'Home'},
    {icon: Gauge, label: 'trainings'},
    {icon: Settings, label: 'settings'},
];

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;

    onClick?(): void;
}

const NavbarLink = ({icon: Icon, label, active, onClick}: NavbarLinkProps) => {
    const {classes, cx} = useStyles();
    return (
        <Link to={'/' + label}>
            <Tooltip label={label} position="right" withArrow transitionDuration={0}>
                <UnstyledButton onClick={onClick} className={cx(classes.link, {[classes.active]: active})}>
                    <Icon/>
                </UnstyledButton>
            </Tooltip>
        </Link>
    );
};

export const AppNavigation = () => {
    const [active, setActive] = useState(2);
    const links = navItems.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));
    return (
        <Navbar width={{base: 100}} p="md">
            <Center>
                <WeightliftingWebAppLogo/>
            </Center>
            <Navbar.Section grow>
                <Group direction="column" align="center" spacing={0}>
                    {links}
                </Group>
            </Navbar.Section>
            <Navbar.Section>
                <Group direction="column" align="center" spacing={0}>
                    <NavbarLink icon={Logout} label="Logout"/>
                </Group>
            </Navbar.Section>
        </Navbar>
    )
}
