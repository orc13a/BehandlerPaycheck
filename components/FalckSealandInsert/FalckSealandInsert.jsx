import { Box, Center, Divider, Flex, Paper, Select, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { IconTerminal2 } from "@tabler/icons-react";
import { paycheckMonths } from "@/utils/paycheckMonths";
import sealandAgreementJson from '../../public/agreements/sealand.json'

export default function FalckSealandInsert() {
    const agreement = sealandAgreementJson['Falck'];
    const matchesMediaQueryFormWarp = useMediaQuery('(min-width: 584px)');

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
                        label="Kvalifikation"
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
                    <Paper withBorder p='md' w='100%'>
                        <Box>
                            <Text fw={500}>
                                Vagter
                            </Text>
                        </Box>
                        <Divider my='xs' />
                        <Flex>
                            <Select
                                label="Vagt type"
                                placeholder="Vælg"
                                data={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',]}
                                checkIconPosition="right"
                                withAsterisk
                            />
                        </Flex>
                    </Paper>
                </Flex>
            </Stack>
        </Center>
    );
}