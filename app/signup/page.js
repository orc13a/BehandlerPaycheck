"use client"
import { appwriteAccount } from '@/utils/appwrite';
import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Stack,
    Progress,
    Popover,
    Box,
    rem
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';

function PasswordRequirement({ meets, label }) {
    return (
        <Text
            c={meets ? 'teal' : 'red'}
            style={{ display: 'flex', alignItems: 'center' }}
            mt={7}
            size="sm"
        >
            {meets ? (
                <IconCheck style={{ width: rem(14), height: rem(14) }} />
            ) : (
                <IconX style={{ width: rem(14), height: rem(14) }} />
            )}{' '}
            <Box ml={10}>{label}</Box>
        </Text>
    );
}

const requirements = [
    { re: /[0-9]/, label: 'Inkluder et tal' },
    { re: /[a-z]/, label: 'Inkluder småt bogstav' },
    { re: /[A-Z]/, label: 'Inkluder stort bogstav' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Inkluder særligt symbol' },
];

function getStrength(password) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Signup() {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [value, setValue] = useState('');
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
    ));

    const strength = getStrength(value);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

    const form = useForm({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            passwordRepeat: '',
        },

        validate: {
            first_name: isNotEmpty('Udfuld navn'),
            last_name: isNotEmpty('Udfuld navn'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Ukyldig email'),
            // password: (value) => (/^\[$&+,:;=?@#|'<>.^*()%!-]/.test(value))
        },
    });

    const signup = async ({ email, password, first_name, last_name }) => {
        console.log(email, password);
        const promise = appwriteAccount.create('123123', email, password, `${first_name} ${last_name}`);

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }

    return (
        <>
            <Container size={420} my={40}>
                <Title ta="center" fw={900}>
                    Velkommen
                </Title>

                <Paper withBorder shadow="xl" mt={30} p={30} radius="lg">
                    <form onSubmit={form.onSubmit((values) => signup(values))}>
                        <Stack mt={30} gap='md'>
                            <TextInput size='md' radius='md' label="Fornavn" placeholder="Lars" withAsterisk {...form.getInputProps('first_name')} />
                            <TextInput size='md' radius='md' label="Efternavn" placeholder="Larsen" withAsterisk {...form.getInputProps('last_name')} />
                            <TextInput size='md' radius='md' label="Email" placeholder="behandler@net.com" withAsterisk {...form.getInputProps('email')} />
                            {/* <PasswordInput size='md' radius='md' label="Adgangskode" placeholder="Din adgangskode" withAsterisk /> */}
                            <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
                                <Popover.Target>
                                    <div
                                        onFocusCapture={() => setPopoverOpened(true)}
                                        onBlurCapture={() => setPopoverOpened(false)}
                                    >
                                        <PasswordInput
                                            size='md' radius='md' label="Adgangskode" placeholder="Din adgangskode" withAsterisk
                                            value={value}
                                            onChange={(event) => setValue(event.currentTarget.value)}
                                            {...form.getInputProps('password')}
                                        />
                                    </div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <Progress color={color} value={strength} size={5} mb="xs" />
                                    <PasswordRequirement label="Inkluder mindst 8 tegn" meets={value.length > 7} />
                                    {checks}
                                </Popover.Dropdown>
                            </Popover>
                            <PasswordInput size='md' radius='md' label="Gentag adgangskode" placeholder="Din adgangskode" withAsterisk {...form.getInputProps('passwordRepeat')} />
                        </Stack>
                        <Button type='submit' radius='md' fullWidth my="xl">
                            Opret konto
                        </Button>
                        <Text c="dimmed" size="sm" ta="center">
                            Har du en konto?{' '}
                            <Anchor href="/login" size="sm" component='a'>
                                Login
                            </Anchor>
                        </Text>
                    </form>
                </Paper>
            </Container>
        </>
    );
}

export default Signup;