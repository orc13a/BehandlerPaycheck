"use client"

import { ActionIcon, Affix, Center, Container, Flex, Paper, Select, Stack, Stepper, Text, Transition, useMantineColorScheme } from "@mantine/core";
import styles from './page.module.css';
import { useState } from "react";
import { closeModal, modals } from "@mantine/modals";
import { useForm } from "@mantine/form";
import { IconTerminal2 } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

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
    const matchesMediaQueryFormWarp = useMediaQuery('(min-width: 584px)');
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const form = useForm({
        initialValues: {
            region: '',
            entrepreneur: ''
        },
    });

    window.onbeforeunload = (e) => {
        if (form.values.entrepreneur !== '') {
            // e.preventDefault();
            // return 'Sikker på du vil forlade denne side? Alt indsat data vil blive slettet.';
        }
    };

    const RegionPaper = ({ region }) => (
        <Paper onClick={() => { form.setFieldValue('region', region), nextStep() }} w='200px' withBorder p='md' className={colorScheme === 'light' ? styles.regionPaperLight : styles.regionPaperDark}>
            <Text fw={500}>
                {region}
            </Text>
        </Paper>
    );

    const EntrepreneurPaper = ({ entrepreneur }) => (
        <Paper onClick={() => { form.setFieldValue('entrepreneur', entrepreneur), nextStep() }} w='200px' withBorder p='md' className={colorScheme === 'light' ? styles.regionPaperLight : styles.regionPaperDark}>
            <Text fw={500}>
                {entrepreneur}
            </Text>
        </Paper>
    );

    return (
        <>
            <Affix position={{ bottom: 20, right: 20 }}>
                <ActionIcon onClick={() => console.log(form.values)} size='lg' variant='light'>
                    <IconTerminal2 />
                </ActionIcon>
            </Affix>
            <Container size='sm'>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                                <StepperSubtitle t={form.values.region} />
                                {/*  */}
                                <Center mt='xl'>
                                    <Stack>
                                        {form.values.region !== '' ? (
                                            <>
                                                {entrepreneurs[form.values.region].map(e => (
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
                                <StepperSubtitle t={form.values.region + ' / ' + form.values.entrepreneur} />
                                {/*  */}
                                {/*  */}
                                <Center mt='xl'>
                                    <Stack>
                                        <Flex justify={matchesMediaQueryFormWarp ? 'left' : 'center'} direction='row' wrap='wrap' gap='lg'>
                                            <Select
                                                label="Løn måned"
                                                placeholder="Vælg"
                                                data={['Elev', 'Assistent', 'Behandler', 'Paramediciner', 'Advanced paramediciner']}
                                                checkIconPosition="right"
                                                w='250px'
                                                withAsterisk
                                            />
                                        </Flex>
                                        {/*  */}
                                        <Flex justify='center' direction='row' wrap='wrap' gap='lg'>
                                            <Select
                                                label="Kvalifikation"
                                                placeholder="Vælg"
                                                data={['Elev', 'Assistent', 'Behandler', 'Paramediciner', 'Advanced paramediciner']}
                                                checkIconPosition="right"
                                                w='250px'
                                                withAsterisk
                                            />
                                            <Select
                                                label="Års tjeneste"
                                                placeholder="Vælg"
                                                data={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',]}
                                                checkIconPosition="right"
                                                w='250px'
                                                withAsterisk
                                            />
                                        </Flex>
                                    </Stack>
                                </Center>
                            </Flex>
                        </Stepper.Step>
                        <Stepper.Step allowStepSelect={false} aria-label='Færdige overblik'>
                            <Flex px='md' py='sm' direction='column'>

                            </Flex>
                        </Stepper.Step>
                    </Stepper>
                </form>
            </Container>
        </>
    );
}