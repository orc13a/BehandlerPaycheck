import { ActionIcon, Box, Button, Center, Divider, Flex, NumberInput, Paper, Pill, Select, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { IconPlus, IconTerminal2 } from "@tabler/icons-react";
import { paycheckMonths } from "@/utils/paycheckMonths";
import sealandAgreementJson from '../../public/agreements/sealand.json'
import { modals } from "@mantine/modals";

export default function FalckSealandInsert() {
    const agreement = sealandAgreementJson['Falck'];
    const matchesMediaQueryFormWarp = useMediaQuery('(min-width: 584px)');

    const shiftsNamesList = () => {
        let arr = [];

        for (const key in agreement['vagtordning']) {
            arr.push(key);
        }

        return arr;
    }

    const openAddShiftModal = () => {
        modals.open({
            title: 'Vagtordning',
            centered: matchesMediaQueryFormWarp ? true : false,
            children: (
                <>
                    <Stack>
                        <Select
                            label="Vagtordning"
                            placeholder="Vælg"
                            data={shiftsNamesList()}
                            checkIconPosition="right"
                            withAsterisk
                        />
                        <NumberInput
                            label='Antal'
                            withAsterisk
                            size='md'
                            radius='9px'
                            min={1}
                            max={31}
                            defaultValue={1}
                        />
                        <Button onClick={() => modals.closeAll()}>
                            Gem
                        </Button>
                    </Stack>
                </>
            ),
        });
    }

    return (
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
                    />
                    <Select
                        label="Ansættelsetype"
                        placeholder="Vælg"
                        data={['Fuldtid', 'Stationsafløsere', 'Områdereddere', 'Timelønnede']}
                        checkIconPosition="right"
                        w='250px'
                        withAsterisk
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
                                    <ActionIcon onClick={openAddShiftModal} variant='light' size='lg'>
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
    );
}