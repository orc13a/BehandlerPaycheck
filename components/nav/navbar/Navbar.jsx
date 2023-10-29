'use client'

import { ActionIcon, Badge, Box, Container, Drawer, Flex, Paper, Stack, Text, Transition, useMantineColorScheme } from "@mantine/core";
import { IconArchive, IconInfoSquareRounded, IconMenuDeep, IconMoon, IconNumber, IconNumbers, IconSun, IconX } from "@tabler/icons-react";
import styles from './Navbar.module.css';
import Link from "next/link";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function Navbar() {
    const matchesMediaQueryMenu = useMediaQuery('(max-width: 429px)');
    const matchesMediaQuery = useMediaQuery('(min-width: 430px)');
    const { setColorScheme, colorScheme } = useMantineColorScheme();
    const [opened, { open, close }] = useDisclosure(false);

    const getActive = (path) => {
        const urlPathname = window.location.pathname;
        const pathname = urlPathname.split('/')[1];

        return path === pathname;
    }

    const navTexts = [
        {
            path: 'calculator',
            pathname: '/calculator',
            display: 'Omregner',
            badgeNr: null,
            icon: <IconNumbers />
        },
        {
            path: 'archives',
            pathname: '/archives',
            display: 'Arkiver',
            badgeNr: null,
            icon: <IconArchive />
        },
        {
            path: 'about',
            pathname: '/about',
            display: 'Om',
            badgeNr: null,
            icon: <IconInfoSquareRounded />
        },
    ];

    const NavbarMenuText = ({ nt }) => (
        <Text component={Link} href={nt.pathname} fw={getActive(nt.path) ? 600 : 400} size="18px" className={colorScheme === 'light' ? styles.navTextLight : styles.navTextDark}>
            {nt.display}
        </Text>
    );

    const NavDrawerBtns = ({ nt }) => (
        <Paper radius='lg' component={Link} href={nt.pathname} className={colorScheme === 'light' ? styles.navDrawerTextLight : styles.navDrawerTextDark}>
            <Flex gap='25px' direction='row' justify='space-between' align='center' p='md'>
                <Box>
                    {nt.badgeNr > 0 ? (
                        <Badge variant='light' size="lg" radius='md'>
                            <Text size='xs'>
                                {nt.badgeNr}
                            </Text>
                        </Badge>
                    ) : null}
                </Box>
                <Box align='right' w='100%'>
                    <Text fw={getActive(nt.path) ? 600 : 400} size='18px'>
                        {nt.display}
                    </Text>
                </Box>
                <Flex>
                    {/* <ActionIcon> */}
                    {nt.icon}
                    {/* </ActionIcon> */}
                </Flex>
            </Flex>
        </Paper>
    );

    return (
        <nav>
            <Drawer
                opened={opened}
                onClose={close}
                withCloseButton={false}
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                position='right'
                size='xs'
            >
                <Flex justify='space-between' p='lg'>
                    <ActionIcon ml={13} onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')} style={styles} variant='subtle' size='lg'>
                        {colorScheme === 'light' ? <IconMoon /> : <IconSun />}
                    </ActionIcon>
                    <ActionIcon mr={13} onClick={close} variant='subtle' size='lg'>
                        <IconX />
                    </ActionIcon>
                </Flex>
                <Box>
                    <Stack>
                        {navTexts.map(nt => <NavDrawerBtns nt={nt} />)}
                    </Stack>
                </Box>
            </Drawer>
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <Box p='md' mb='xl'>
                <Container size='xl'>
                    <Paper shadow='md' p='lg' h='100%' withBorder={colorScheme === 'dark'}>
                        <Flex justify='space-between' align='center' h='100%'>
                            <Box>
                                <Text
                                    component={Link} href="/"
                                    size="32px"
                                    fw={700}
                                    variant="gradient"
                                    gradient={{ from: 'grape', to: 'violet', deg: 0 }}
                                >
                                    BP
                                </Text>
                            </Box>
                            {!matchesMediaQueryMenu ? (
                                <Flex direction='row' align='center' gap='lg'>
                                    {navTexts.map(nt => <NavbarMenuText nt={nt} />)}
                                </Flex>
                            ) : null}
                            <Box>
                                {matchesMediaQueryMenu ? (
                                    <ActionIcon variant='subtle' size='lg'>
                                        <IconMenuDeep onClick={open} />
                                    </ActionIcon>
                                ) : null}
                                {matchesMediaQuery ? (
                                    <ActionIcon onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')} style={styles} variant='subtle' size='lg'>
                                        {colorScheme === 'light' ? <IconMoon /> : <IconSun />}
                                    </ActionIcon>
                                ) : null}
                            </Box>
                        </Flex>
                    </Paper>
                </Container>
            </Box>
        </nav>
    );
}