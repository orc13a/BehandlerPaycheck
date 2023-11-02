import { ActionIcon, Affix, Box, Button, Center, Divider, Drawer, Flex, NumberInput, Paper, Pill, Select, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { IconPlus, IconTerminal2 } from "@tabler/icons-react";
import { paycheckMonths } from "@/utils/paycheckMonths";
import sealandAgreementJson from '../../public/agreements/sealand.json'
import { modals } from "@mantine/modals";
import { useState } from "react";

export default function FalckSealandInsert() {
    const agreement = sealandAgreementJson['Falck'];
    const matchesMediaQueryFormWarp = useMediaQuery('(min-width: 584px)');
    const [opened, { open, close }] = useDisclosure(false);
    const [addShiftObj, setAddShiftObj] = useState({ vagtordning: '', garantidøgnvagt: '', antal: 1 });

    const form = useForm({
        initialValues: {
            month: '',
            employment: '',
            education: '',
            years: '',
            shifts: []
        },

        validate: {

        },
    });
    console.log(addShiftObj);

    const canAddShift = () => {
        if (addShiftObj.vagtordning.length > 1) {
            if (addShiftObj.vagtordning === 'Garantidøgnvagt' && addShiftObj.garantidøgnvagt.length > 1) {
                return false;
            } else if (addShiftObj.vagtordning !== 'Garantidøgnvagt') {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    const addShift = () => {
        let newShiftsArr = form.values.shifts;
        let s = {
            shift: '',
            amount: addShiftObj.antal
        }

        if (addShiftObj.vagtordning === 'Garantidøgnvagt') {
            s.shift = addShiftObj.garantidøgnvagt
        } else {
            s.shift = addShiftObj.vagtordning
        }

        newShiftsArr.push(s);

        form.setFieldValue('shifts', newShiftsArr);

        modals.closeAll();
        setAddShiftObj({vagtordning: '', garantidøgnvagt: '', antal: 1 });
    }

    const shiftsNamesList = () => {
        let arr = [];

        for (const key in agreement['vagtordning']) {
            arr.push(key);
        }

        return arr;
    }

    const shiftsGarantiNamesList = () => {
        let arr = [];

        for (const key in agreement['vagtordning']['Garantidøgnvagt']) {
            arr.push(key);
        }

        return arr;
    }

    return (
        <>
            <Affix>
                <ActionIcon onClick={() => console.log(form.values)} variant='light' m='lg'>
                    C
                </ActionIcon>
            </Affix>
            {/*  */}
            <Drawer
                opened={opened}
                onClose={() => { close(), setAddShiftObj({ vagtordning: '', garantidøgnvagt: '', antal: 1 }) }}
                title={<Text fw={600}>Tilføj vagtordning</Text>}
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                position={!matchesMediaQueryFormWarp ? 'bottom' : 'right'}
            >
                <Stack>
                    <Select
                        label="Vagtordning"
                        placeholder="Vælg"
                        data={shiftsNamesList()}
                        checkIconPosition="right"
                        withAsterisk
                        onChange={(e) => setAddShiftObj({ ...addShiftObj, vagtordning: e, garantidøgnvagt: '' })}
                        allowDeselect={false}
                    />
                    {addShiftObj.vagtordning === 'Garantidøgnvagt' ? (
                        <Select
                            label="Garantidøgnvagtstype"
                            placeholder="Vælg"
                            data={shiftsGarantiNamesList()}
                            checkIconPosition="right"
                            withAsterisk
                            onChange={(e) => setAddShiftObj({ ...addShiftObj, garantidøgnvagt: e })}
                            allowDeselect={false}
                        />
                    ) : null}
                    <NumberInput
                        label='Antal'
                        withAsterisk
                        size='md'
                        radius='9px'
                        min={1}
                        max={31}
                        defaultValue={1}
                        onChange={(e) => setAddShiftObj({ ...addShiftObj, antal: e })}
                    />
                    <Button disabled={canAddShift()} onClick={addShift}>
                        Tilføj
                    </Button>
                </Stack>
            </Drawer>
            {/*  */}
            {/*  */}
            {/*  */}
            <Center mt='xl'>
                <Stack>
                    <Flex justify={matchesMediaQueryFormWarp ? 'left' : 'center'} direction='row' wrap='wrap' gap='lg'>
                        <Select
                            label="Løn måned"
                            placeholder="Vælg"
                            data={paycheckMonths()}
                            checkIconPosition="right"
                            w='250px'
                            withAsterisk
                            {...form.getInputProps('month')}
                            allowDeselect={false}
                        />
                        <Select
                            label="Ansættelssetype"
                            placeholder="Vælg"
                            data={['Fuldtid', 'Stationsafløsere', 'Områdereddere', 'Timelønnede']}
                            checkIconPosition="right"
                            w='250px'
                            withAsterisk
                            {...form.getInputProps('employment')}
                            allowDeselect={false}
                        />
                    </Flex>
                    {/*  */}
                    <Flex justify='center' direction='row' wrap='wrap' gap='lg'>
                        <Select
                            label="Stillingskategori"
                            placeholder="Vælg"
                            data={['Elev', 'Assistent', 'Behandler', 'Paramediciner']} // , 'Advanced paramediciner'
                            checkIconPosition="right"
                            w='250px'
                            withAsterisk
                            {...form.getInputProps('education')}
                            allowDeselect={false}
                        />
                        <Select
                            label="Års tjeneste"
                            placeholder="Vælg"
                            data={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',]}
                            checkIconPosition="right"
                            w='250px'
                            withAsterisk
                            {...form.getInputProps('years')}
                            allowDeselect={false}
                        />
                    </Flex>
                    {/*  */}
                    <Flex justify='center' direction='row'>
                        <Paper w={matchesMediaQueryFormWarp ? '100%' : '250px'} withBorder p='md'>
                            <Flex justify='space-between'>
                                <Box>
                                    <Text fw={500}>
                                        Vagtordning
                                    </Text>
                                </Box>
                                <Box>
                                    <Tooltip
                                        openDelay={2000}
                                        withArrow
                                        arrowOffset={20}
                                        arrowRadius={2}
                                        arrowSize={6}
                                        label='Tilføj vagt'
                                        position='bottom-end'
                                        transitionProps={{ transition: 'skew-up', duration: 300 }}
                                    >
                                        <ActionIcon onClick={open} variant='light' size='lg'>
                                            <IconPlus />
                                        </ActionIcon>
                                    </Tooltip>
                                </Box>
                            </Flex>
                            {/* <Select
                            label="Vagtordning"
                            placeholder="Vælg"
                            data={shiftsNamesList()}
                            checkIconPosition="right"
                            withAsterisk
                        />
                        <Divider my='sm' />
                        <Pill size="lg" withRemoveButton>React</Pill> */}
                        </Paper>
                    </Flex>
                </Stack>
            </Center>
        </>
    );
}