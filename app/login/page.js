"use client"
import { appwriteAccount } from '@/utils/appwrite';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';

function Login() {
    // const promise = appwriteAccount.get();

    // promise.then(function (response) {
    //     console.log(response); // Success
    // }, function (error) {
    //     console.log(error); // Failure
    // });

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        }
    });

    const login = async ({ email, password }) => {
        const promise = appwriteAccount.createEmailSession(email, password);

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
                    Velkommen tilbage!
                </Title>
                <form onSubmit={form.onSubmit((values) => login(values))}>
                    <Paper withBorder shadow='xl' p={30} mt={30} radius="lg">
                        <TextInput size='md' radius='md' label="Email" placeholder="behandler@net.com" {...form.getInputProps('email')} />
                        <PasswordInput size='md' radius='md' label="Adgangskode" placeholder="Din adgangskode" mt="md" {...form.getInputProps('password')} />
                        <Group justify="space-between" mt="lg">
                            {/* <Checkbox label="Forbliv logget ind" /> */}
                            <Anchor component="button" size="sm">
                                Glemt adgangskode?
                            </Anchor>
                        </Group>
                        <Button type='submit' radius='md' fullWidth my="xl">
                            Log ind
                        </Button>
                        <Text c="dimmed" size="sm" ta="center">
                            Har du ikke en konto?{' '}
                            <Anchor href="/signup" size="sm" component='a'>
                                Opret konto
                            </Anchor>
                        </Text>
                    </Paper>
                </form>
            </Container>
        </>
    );
}

export default Login;