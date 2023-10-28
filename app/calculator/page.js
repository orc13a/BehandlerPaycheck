"use client"

import { Center, Container, Flex, Paper, Stack, Stepper, Text, Transition, useMantineColorScheme } from "@mantine/core";
import styles from './page.module.css';

const regions = [
    'Hovedstaden',
    'Sjælland',
    'Syddanmark',
    'Midtjylland',
    'Nordjylland'
];

export default function Calculator() {
    const { colorScheme } = useMantineColorScheme();

    const RegionPaper = ({ region }) => (
        <Paper w='180px' withBorder p='md' className={colorScheme === 'light' ? styles.regionPaperLight : styles.regionPaperDark }>
            <Text fw={500}>
                {region}
            </Text>
        </Paper>
    );

    return (
        <>
            <Container size='sm'>
                <Stepper w='100%' iconSize={32} active={0}>
                    <Stepper.Step aria-label='Vælg region'>
                        <Flex px='md' py='sm' direction='column'>
                            <Text size='xl' fw='bold' mb='xl'>
                                Vælg region
                            </Text>
                            <Center>
                                <Stack>
                                    {regions.map(r => (
                                        <RegionPaper region={r} />
                                    ))}
                                </Stack>
                            </Center>
                        </Flex>
                    </Stepper.Step>
                    <Stepper.Step aria-label='Vælg entreprenør'>

                    </Stepper.Step>
                    <Stepper.Step aria-label='Indsæt data for vagter'>

                    </Stepper.Step>
                    <Stepper.Step aria-label='Færdige overblik'>

                    </Stepper.Step>
                </Stepper>
            </Container>
        </>
    );
}