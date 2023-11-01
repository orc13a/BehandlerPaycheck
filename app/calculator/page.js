"use client"

import { Center, Container, Flex, Paper, Stack, Stepper, Text, useMantineColorScheme } from "@mantine/core";
import styles from './page.module.css';
import { useState } from "react";
import FalckSealandInsert from "@/components/FalckSealandInsert/FalckSealandInsert";
import { modals } from "@mantine/modals";

const regions = [
    // 'Hovedstaden',
    'Sjælland',
    // 'Syddanmark',
    // 'Midtjylland',
    // 'Nordjylland'
];

const entrepreneurs = {
    'Hovedstaden': [
        'Akutberedskabet',
        'Falck'
    ],
    'Sjælland': [
        'Ambulance Sjælland',
        'Falck'
    ]
};

const StepperTitle = ({ t }) => (
    <Text size='xl' fw='bold'>
        {t}
    </Text>
);

const StepperSubtitle = ({ t }) => (
    <Text c='dimmed' size='md' fw='500' mt='xs'>
        {t}
    </Text>
);

export default function Calculator() {
    const { colorScheme } = useMantineColorScheme();
    const [active, setActive] = useState(0);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedEntrepreneur, setSelectedEntrepreneur] = useState('');
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    window.onbeforeunload = (e) => {
        if (form.values.entrepreneur !== '') {
            // e.preventDefault();
            // return 'Sikker på du vil forlade denne side? Alt indsat data vil blive slettet.';
        }
    };

    const RegionPaper = ({ region }) => (
        <Paper onClick={() => { setSelectedRegion(region), nextStep() }} w='200px' withBorder p='md' className={colorScheme === 'light' ? styles.regionPaperLight : styles.regionPaperDark}>
            <Text fw={500}>
                {region}
            </Text>
        </Paper>
    );

    const EntrepreneurPaper = ({ entrepreneur }) => (
        <Paper onClick={() => { setSelectedEntrepreneur(entrepreneur), nextStep() }} w='200px' withBorder p='md' className={colorScheme === 'light' ? styles.regionPaperLight : styles.regionPaperDark}>
            <Text fw={500}>
                {entrepreneur}
            </Text>
        </Paper>
    );

    return (
        <>
            {/* <Affix position={{ bottom: 20, right: 20 }}>
                <ActionIcon onClick={() => console.log(form.values)} size='lg' variant='light'>
                    <IconTerminal2 />
                </ActionIcon>
            </Affix> */}
            <Container size='sm' pb='50px'>
                <Stepper w='100%' iconSize={32} active={active} onStepClick={setActive}>
                    <Stepper.Step allowStepSelect={false} aria-label='Vælg region'>
                        <Flex px='md' py='sm' direction='column'>
                            <StepperTitle t="Vælg region" />
                            {/*  */}
                            <Center mt='xl'>
                                <Stack>
                                    {regions.map(r => (
                                        <RegionPaper region={r} />
                                    ))}
                                </Stack>
                            </Center>
                        </Flex>
                    </Stepper.Step>
                    <Stepper.Step allowStepSelect={false} aria-label='Vælg entreprenør'>
                        <Flex px='md' py='sm' direction='column'>
                            <StepperTitle t="Vælg entreprenør" />
                            <StepperSubtitle t={selectedRegion} />
                            {/*  */}
                            <Center mt='xl'>
                                <Stack>
                                    {selectedRegion !== '' ? (
                                        <>
                                            {entrepreneurs[selectedRegion].map(e => (
                                                <EntrepreneurPaper entrepreneur={e} />
                                            ))}
                                        </>
                                    ) : null}
                                </Stack>
                            </Center>
                        </Flex>
                    </Stepper.Step>
                    <Stepper.Step allowStepSelect={false} aria-label='Indsæt data for vagter'>
                        <Flex px='md' py='sm' direction='column'>
                            <StepperTitle t="Indsæt månedens arbejde" />
                            <StepperSubtitle t={selectedRegion + ' / ' + selectedEntrepreneur} />
                            {/*  */}
                            {/*  */}
                            {selectedRegion === 'Sjælland' ? (
                                <>
                                    {selectedEntrepreneur === 'Ambulance Sjælland' ? null : <FalckSealandInsert />}
                                </>
                            ) : null}
                        </Flex>
                    </Stepper.Step>
                    <Stepper.Step allowStepSelect={false} aria-label='Færdige overblik'>
                        <Flex px='md' py='sm' direction='column'>

                        </Flex>
                    </Stepper.Step>
                </Stepper>
            </Container>
        </>
    );
}