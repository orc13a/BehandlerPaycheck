"use client"

import { Center, Container, Flex, Paper, Stack, Stepper, Text, Transition, useMantineColorScheme } from "@mantine/core";
import styles from './page.module.css';
import { useState } from "react";
import { closeModal, modals } from "@mantine/modals";

const regions = [
    'Hovedstaden',
    'Sjælland',
    'Syddanmark',
    'Midtjylland',
    'Nordjylland'
];

const StepperTitle = ({ t }) => (
    <Text size='xl' fw='bold' mb='xl'>
        {t}
    </Text>
);

export default function Calculator() {
    const { colorScheme } = useMantineColorScheme();
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    window.onbeforeunload = (e) => {
        e.preventDefault();
        return 'Sikker på du vil forlade denne side? Alt indsat data vil blive slettet.';
    };

    const RegionPaper = ({ region }) => (
        <Paper onClick={nextStep} w='180px' withBorder p='md' className={colorScheme === 'light' ? styles.regionPaperLight : styles.regionPaperDark}>
            <Text fw={500}>
                {region}
            </Text>
        </Paper>
    );

    return (
        <>
            <Container size='sm'>
                <form>
                    <Stepper w='100%' iconSize={32} active={active} onStepClick={setActive}>
                        <Stepper.Step aria-label='Vælg region'>
                            <Flex px='md' py='sm' direction='column'>
                                <StepperTitle t="Vælg region" />
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
                            <Flex px='md' py='sm' direction='column'>
                                <StepperTitle t="Vælg entreprenør" />
                            </Flex>
                        </Stepper.Step>
                        <Stepper.Step aria-label='Indsæt data for vagter'>
                            <Flex px='md' py='sm' direction='column'>

                            </Flex>
                        </Stepper.Step>
                        <Stepper.Step aria-label='Færdige overblik'>
                            <Flex px='md' py='sm' direction='column'>

                            </Flex>
                        </Stepper.Step>
                    </Stepper>
                </form>
            </Container>
        </>
    );
}