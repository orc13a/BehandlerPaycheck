'use client'

import { ActionIcon, Box, Container, Flex, Paper, Text, Transition, useMantineColorScheme } from "@mantine/core";
import { IconMenuDeep, IconMoon, IconSun } from "@tabler/icons-react";
import styles from './Navbar.module.css';
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

export default function Navbar() {
    const matchesMediaQuery = useMediaQuery('(min-width: 430px)');
    const { setColorScheme, colorScheme } = useMantineColorScheme();

    const getActive = (path) => {
        const urlPathname = window.location.pathname;
        const pathname = urlPathname.split('/')[1];

        return path === pathname;
    }

    return (
        <nav>
            <Box p='md'>
                <Container size='xl'>
                    <Paper shadow='lg' p='lg' h='100%' withBorder>
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
                            <Flex direction='row' align='center' gap='lg'>
                                <Text component={Link} href="/calculator" fw={getActive('calculator') ? 600 : 400} size="18px" className={colorScheme === 'light' ? styles.navTextLight : styles.navTextDark}>
                                    Udregner
                                </Text>
                                <Text component={Link} href="/archives" fw={getActive('archives') ? 600 : 400} size="18px" className={colorScheme === 'light' ? styles.navTextLight : styles.navTextDark}>
                                    Arkiver
                                </Text>
                            </Flex>
                            <Box>
                                {/* <ActionIcon variant='subtle' size='lg'>
                                    <IconMenuDeep />
                                </ActionIcon> */}
                                {/* {matchesMediaQuery ? ( */}
                                <Transition mounted={matchesMediaQuery} transition='scale' duration={400} timingFunction="ease">
                                    {(styles) =>
                                        <ActionIcon onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')} style={styles} variant='subtle' size='lg'>
                                            {colorScheme === 'light' ? <IconMoon /> : <IconSun />}
                                        </ActionIcon>
                                    }
                                </Transition>
                                {/* ) : null} */}
                            </Box>
                        </Flex>
                    </Paper>
                </Container>
            </Box>
        </nav>
    );
}